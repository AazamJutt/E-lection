import { useState, useEffect } from "react";
import { Candidate } from "../models/Candidate";
import CANDIDATE_API from "../api/services/candidates";
import useData from "./useData";

const useCandidateList = () => {
  const { data: candidateList, isLoading } = useData<Candidate[]>({
    apiCall: CANDIDATE_API.getAllCandidates,
    initialValue: [],
  });

  return { candidateList, isLoading };
};

export default useCandidateList;
