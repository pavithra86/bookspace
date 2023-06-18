import React from "react";
import ReportHook from "./report.hook";
import Tabless from "./table";
function Reportitemdetial(props) {

  var { isLoading, data, isError } = ReportHook();
  if (isLoading) {
    return <h3>Loading!!!!!</h3>;
  }
  if (isError) {
    return <h3>Error!!!!</h3>;
  }
 
;
  console.log("====================================");
  console.log(data);
  console.log("====================================");
  return (
    <div>
      <Tabless arr={data} />
    </div>
  );
}

export default Reportitemdetial;
