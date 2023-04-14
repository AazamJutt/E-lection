import { useState, useEffect } from "react";
import { Candidate } from "../models/Candidate";
import CandidateService from "../api/services/candidates.service";
import useData from "./useData";

const useCandidateList = () => {
  const { data: candidateList, isLoading } = useData<Candidate[]>({
    apiCall: CandidateService.getAllCandidates,
    initialValue: [],
  });

  return { candidateList, isLoading };
};

export default useCandidateList;
