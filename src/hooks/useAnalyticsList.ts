import VOTING_API from "../api/services/votes";
import { Analytic } from "../models/Analytic";
import useData from "./useData";

const useAnalyticsList = () => {
  const { data: analyticsList, isLoading } = useData<Analytic[]>({
    apiCall: VOTING_API.getAllVotes,
    initialValue: [],
  });

  return { analyticsList, isLoading };
};

export default useAnalyticsList;
