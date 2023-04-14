import axios from "axios";
import { CastVotePayload } from "../types/votes";
import { API_BASE_URL } from "@env";

const VOTING_API_URL = API_BASE_URL + "/votes";

const VOTING_API = {
  // GET all votes:
  getAllVotes: () => axios.get(VOTING_API_URL),

  // GET votes by candidate :id
  getVotesByCandidate: (candidateId: number) =>
    axios.get(`${VOTING_API_URL}/${candidateId}`),

  // POST cast a new vote
  castVote: (payload: CastVotePayload) =>
    axios.post(VOTING_API_URL, {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }),
};

export default VOTING_API;
