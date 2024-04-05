import { OptionsType } from "../../utils/types";
import Missions from "./component";

const missionsList = [
  {
    departure: {
      city: "Paris",
      postalCode: 75,
      date: new Date(),
    },
    arrival: {
      city: "Lille",
      postalCode: 75,
      date: new Date(),
    },
    price: 50,
    km: 217,
    costumer: "Client A",
    reference: 789078,
    options: [OptionsType.GARAGE],
    quotations: 1,
  },
  {
    departure: {
      city: "Paris",
      postalCode: 75,
      date: new Date(),
    },
    arrival: {
      city: "Lille",
      postalCode: 75,
      date: new Date(),
    },
    price: 30,
    km: 217,
    costumer: "Client A",
    reference: 789079,
    options: [OptionsType.GARAGE, OptionsType.WASHING],
    quotations: 6,
  },
  {
    departure: {
      city: "Paris",
      postalCode: 75,
      date: new Date(),
    },
    arrival: {
      city: "Lille",
      postalCode: 75,
      date: new Date(),
    },
    price: 30,
    km: 217,
    costumer: "Client A",
    reference: 789079,
    options: [OptionsType.GARAGE],
    quotations: 6,
  },
];

const MissionsContainer = () => {
  return <Missions missionsList={missionsList} />;
};

export default MissionsContainer;
