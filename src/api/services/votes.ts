import axios from "axios";
import { CastVotePayload } from "../types/votes";
import { API_BASE_URL } from "@env";

const VOTING_API_URL = API_BASE_URL + "/votes";

const VOTING_API = {
  // GET all votes:
  getAllVotes: async () => {
    let data = [];
    try {
      const response = await axios.get(VOTING_API_URL);
      data = response.data;
    } catch (err) {
      console.error(err);
    }
    return data;
  },

  // GET votes by candidate :id
  getVotesByCandidate: async (candidateId: number) => {
    let data = [];
    try {
      const response = await axios.get(`${VOTING_API_URL}/${candidateId}`);
      data = response.data;
    } catch (err) {
      console.error(err);
    }
    return data;
  },

  // POST cast a new vote
  castVote: async (payload: CastVotePayload) => {
    let data = {};
    try {
      const response = await axios.post(VOTING_API_URL, {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      data = response.data;
    } catch (err) {
      console.error(err);
    }
    return data;
  },
};

export default VOTING_API;
