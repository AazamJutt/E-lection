import axios from "axios";
import { Candidate } from "../../models/Candidate";
import { API_BASE_URL } from "@env";

const CANDIDATE_API_URL = API_BASE_URL + "/candidates";

const CANDIDATE_API = {
  // GET all candidates:
  getAllCandidates: () => axios.get(CANDIDATE_API_URL),
};

export default CANDIDATE_API;
