import VotingService from "../api/services/votes.service";
import { Analytic } from "../models/Analytic";
import useData from "./useData";

const useAnalyticsList = () => {
  const { data: analyticsList, isLoading } = useData<Analytic[]>({
    apiCall: VotingService.getAllVotes,
    initialValue: [],
  });

  return { analyticsList, isLoading };
};

export default useAnalyticsList;
