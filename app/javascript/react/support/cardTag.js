let handlingStatus = (value)=>{
  if(value === "Not contacted"){
    return "not-contacted"
  }else if (value === "Contacted") {
    return "contacted"
  }else if (value === "New lead") {
    return "new-lead"
  }else if (value === "Current customer") {
    return "current-customer"
  }else if (value === "Champion") {
    return "champion"
  }else if (value === "Disqualified") {
    return "disqualified"
  }else{
    return "error"
  }

}
export default handlingStatus
