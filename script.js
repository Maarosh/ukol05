selectPlan = (planNumber) => {
    document.querySelector("#plan1").classList.remove("plan--selected")
    document.querySelector("#plan2").classList.remove("plan--selected")
    document.querySelector("#plan3").classList.remove("plan--selected")
    selection = "#plan" + planNumber
    document.querySelector(selection).classList.add("plan--selected")
}

selectPlan(1)
selectPlan(3)
selectPlan(2)