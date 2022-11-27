const Entrepreneur = document.querySelector(".entrepreneur");
const Investor = document.querySelector(".investor");
const Identity = document.querySelector(".identity");

const showEntrepreneur = () => {
  Identity.style.height = "0px";
  Identity.style.display = "None";
  Identity.style.overflow = "hidden";

  Entrepreneur.style.height = "100vh";
  Entrepreneur.style.display = "block";
};

const showInvestor = () => {
  Identity.style.height = "0px";
  Identity.style.display = "None";
  Identity.style.overflow = "hidden";

  Investor.style.height = "100vh";
  Investor.style.display = "block";
};

const pitchIdea = () => {
  const className = document.querySelector(".pitch-form-container");
  className.style.height = "130%";
  className.style.display = "flex";
};

function closeContainer(cName) {
  const className = document.querySelector(`.${cName}`);
  className.style.height = "0";
  className.style.display = "none";
  className.style.overflow = "hidden";
}

const back = (cName) => {
  const className = document.querySelector(`.${cName}`);
  className.style.height = "0";
  className.style.display = "none";
  className.style.overflow = "hidden";

  Identity.style.height = "100%";
  Identity.style.display = "flex";
};
