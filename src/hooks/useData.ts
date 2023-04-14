import { useState, useEffect } from "react";

type UseDataProps<T> = {
  apiCall: () => Promise<any>;
  initialValue: T;
};

type UseDataResult<T> = {
  data: T;
  isLoading: boolean;
};

function useData<T>({
  apiCall,
  initialValue,
}: UseDataProps<T>): UseDataResult<T> {
  const [data, setData] = useState<T>(initialValue);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiCall();
        setData(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, isLoading };
}

export default useData;
