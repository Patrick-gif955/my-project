"use strict";
//toggle button
const toggleButton = document.querySelector(".toggle-button");
const accessNav = document.querySelector(".mobile-nav");
const backDrop = document.querySelector(".backdrop");

//get Quotes
const getAccess = document.querySelector(".get-access");
const getQuotes = document.querySelector(".getquotes");
const cancelQuotes = document.querySelector(".cancel");
const cancelSite = document.querySelector(".cancel-site");
const cancelPlan = document.querySelector(".cancel-plan");
const cancelArichitect = document.querySelector(".cancel-architect");
const cancelBuilding = document.querySelector(".cancel-building");
const cancelRoad = document.querySelector(".cancel-road");
const cancelDesign = document.querySelector(".cancel-design");

//site clearing
const siteClearing = document.querySelector(".site-clearing-note");
const siteClearNote = document.querySelector(".site-clearing-notes");

//planing
const planning = document.querySelector(".plan-notes");
const planningNotes = document.querySelector(".planning-notes");

//Architectural
const architecture = document.querySelector(".architect-notes");
const architectureNotes = document.querySelector(".architecture-notes");

//building
const building = document.querySelector(".build-notes");
const buildingNotes = document.querySelector(".building-notes");

//Construction
const roadConstruction = document.querySelector(".road-notes");
const roadConstructionNotes = document.querySelector(
  ".road-construction-notes"
);
//INTERIOR DESIGN
const interiorDesign = document.querySelector(".design-notes");
const interiorDesignNotes = document.querySelector(".interior-design-notes");
// toggleButton.addEventListener("click", function () {
//   accessNav.classList.remove("hidden");
//   backDrop.classList.remove("hidden");
// });
// backDrop.addEventListener("click", function () {
//   accessNav.classList.add("hidden");
//   backDrop.classList.add("hidden");
// });

// open mobile
const openModal = function () {
  accessNav.classList.remove("hidden");
  backDrop.classList.remove("hidden");
};
const closeModal = function () {
  accessNav.classList.add("hidden");
  backDrop.classList.add("hidden");
};
//add quouues
const addQuotes = function () {
  getQuotes.classList.remove("hidden");
  backDrop.classList.remove("hidden");
};
const removeQuotes = function () {
  getQuotes.classList.add("hidden");
  backDrop.classList.add("hidden");
};
//Add site clearance
const addSite = function () {
  backDrop.classList.remove("hidden");
  siteClearNote.classList.remove("hidden");
  siteClearNote.style.backgroundColor = "blue";
  siteClearNote.style.color = "white";
};
const removeSite = function () {
  backDrop.classList.add("hidden");
  siteClearNote.classList.add("hidden");
};
//add plan
const openPlan = function () {
  backDrop.classList.remove("hidden");
  planningNotes.classList.remove("hidden");
  planningNotes.style.backgroundColor = "black";
  planningNotes.style.color = "white";
};
const closePlan = function () {
  backDrop.classList.add("hidden");
  planningNotes.classList.add("hidden");
};
//add architecture
const openArchitect = function () {
  backDrop.classList.remove("hidden");
  architectureNotes.classList.remove("hidden");
  architectureNotes.style.backgroundColor = "green";
  architectureNotes.style.color = "white";
};
const closeArchitect = function () {
  backDrop.classList.add("hidden");
  architectureNotes.classList.add("hidden");
};
//add building
const openBuilding = function () {
  backDrop.classList.remove("hidden");
  buildingNotes.classList.remove("hidden");
  buildingNotes.style.backgroundColor = "purple";
  buildingNotes.style.color = "white";
};
const closeBuilding = function () {
  backDrop.classList.add("hidden");
  buildingNotes.classList.add("hidden");
};
//Road CONSTRUCTION
const openRoad = function () {
  backDrop.classList.remove("hidden");
  roadConstructionNotes.classList.remove("hidden");
  roadConstructionNotes.style.backgroundColor = "orange";
  roadConstructionNotes.style.color = "white";
};
const closeRoad = function () {
  backDrop.classList.add("hidden");
  roadConstructionNotes.classList.add("hidden");
};
//add interior design
const openDesign = function () {
  backDrop.classList.remove("hidden");
  interiorDesignNotes.classList.remove("hidden");
  interiorDesignNotes.style.backgroundColor = "violet";
  interiorDesignNotes.style.color = "white";
};
const closeDesign = function () {
  backDrop.classList.add("hidden");
  interiorDesignNotes.classList.add("hidden");
};

toggleButton.addEventListener("click", openModal);
backDrop.addEventListener("click", closeModal);
backDrop.addEventListener("click", removeQuotes);
cancelQuotes.addEventListener("click", removeQuotes);
getAccess.addEventListener("click", addQuotes);

//site
siteClearing.addEventListener("click", addSite);
backDrop.addEventListener("click", removeSite);
cancelSite.addEventListener("click", removeSite);

//plan
backDrop.addEventListener("click", closePlan);
cancelPlan.addEventListener("click", closePlan);
planning.addEventListener("click", openPlan);

//Architecture
backDrop.addEventListener("click", closeArchitect);
cancelArichitect.addEventListener("click", closeArchitect);
architecture.addEventListener("click", openArchitect);

//building
backDrop.addEventListener("click", closeBuilding);
cancelBuilding.addEventListener("click", closeBuilding);
building.addEventListener("click", openBuilding);

//Road
backDrop.addEventListener("click", closeRoad);
cancelRoad.addEventListener("click", closeRoad);
roadConstruction.addEventListener("click", openRoad);

//design
backDrop.addEventListener("click", closeDesign);
cancelDesign.addEventListener("click", closeDesign);
interiorDesign.addEventListener("click", openDesign);
