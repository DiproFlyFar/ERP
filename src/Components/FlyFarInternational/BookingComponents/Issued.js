import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";

const Issued = () => {
  const [issueData, setIssueData] = useState([]);

  useEffect(() => {
    const url =
      "https://api.flyfarint.com/v.1.0.0/Admin/Booking/all.php?status=Issue%20In%20Processing";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setIssueData(data));
  }, []);

  const [agentData, setAgentData] = useState([]);

  useEffect(() => {
    const url = `https://api.flyfarint.com/v.1.0.0/Admin/Agent/allAgent.php?agentId=${issueData[0]?.agentId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAgentData(data[0]));
  }, [issueData[0]?.agentId]);

  return (
    <Box style={{ width: "97% " }}>
      <Box className="balance-transaction" marginTop={"20px"}>
        <table>
          <tr>
            <th>Reference</th>
            <th>Status</th>
            <th>System </th>
            <th>Type</th>
            <th>Departure & Arrival </th>
            <th>Date </th>
            <th>Airlines</th>
            <th>PNR</th>
            <th>PAX</th>
            <th>Company Name</th>
            <th>View Details</th>
            <th>Call</th>
          </tr>

          {issueData.map(
            (data) =>
              data.status === "Issue In Processing" && (
                <tr>
                  <td>{data?.bookingId}</td>
                  <td>{data?.status}</td>
                  <td>{data?.gds}</td>
                  <td>{data?.tripType}</td>
                  <td>
                    {data?.deptFrom}-{data?.arriveTo}
                  </td>
                  <td>{data?.dateTime.slice(0, 10)}</td>
                  <td>{data?.airlines}</td>
                  <td>{data?.pnr}</td>
                  <td>{data?.pax}</td>
                  <td>{agentData?.company}</td>
                  <td></td>
                  <td>Call</td>
                </tr>
              )
          )}
        </table>
      </Box>
    </Box>
  );
};

export default Issued;
