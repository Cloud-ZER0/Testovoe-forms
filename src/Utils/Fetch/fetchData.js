import axios from "axios";

export const fetchData = async ({
  mainPageData,
  firstPageData,
  secondPageData,
  thirdPageData,
}) => {
  await axios
    .post("/", {
      phoneNumber: mainPageData.phoneNumber,
      email: mainPageData.email,
      nickname: firstPageData.nickname,
      firstName: firstPageData.firstName,
      lastName: firstPageData.lastName,
      gender: firstPageData.gender,
      advantages: secondPageData.advantages,
      checkBoxGroup: secondPageData.checkBoxGroup,
      radioGroup: secondPageData.radioGroup,
      about: thirdPageData.about,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });

  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetch imitation");
      resolve(true);
    }, 3000);
  }).then((value) => value);
};
