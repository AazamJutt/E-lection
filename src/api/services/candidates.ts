import axios from "axios";
import { Candidate } from "../../models/Candidate";

const CANDIDATE_API_URL = "http://localhost:3000/candidates";

const CANDIDATE_API = {
  // GET all candidates:
  getAllCandidates: async () => {
    let data: Candidate[] = [];
    try {
      const response = await axios.get(CANDIDATE_API_URL, {
        timeout: 5000, // set timeout to 5 seconds
      });
      data = response.data;
    } catch (err) {
      console.error(err);
      throw err;
    }
    return data;
  },
};

export default CANDIDATE_API;
