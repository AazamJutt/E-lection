import axios from "axios";
import { Candidate } from "../../models/Candidate";
import { API_BASE_URL } from "@env";

const CANDIDATE_API_URL = API_BASE_URL + "/candidates";

const CANDIDATE_API = {
  // GET all candidates:
  getAllCandidates: async () => {
    let data: Candidate[] = [];
    try {
      const response = await axios.get(CANDIDATE_API_URL);
      data = response.data;
    } catch (err) {
      console.error(err);
      throw err;
    }
    return data;
  },
};

export default CANDIDATE_API;
