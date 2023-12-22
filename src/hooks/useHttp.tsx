import { useCallback, useReducer, useRef } from "react";

enum httpActions {
  Send = "SEND",
  Success = "SUCCESS",
  Error = "ERROR",
}

interface httpStateInt {
  data: unknown | null;
  error: string | null;
  pending: boolean;
}

interface SendAction {
  type: httpActions.Send;
}

interface SuccessAction {
  type: httpActions.Success;
  responseData: unknown;
}

interface ErrorAction {
  type: httpActions.Error;
  errorMessage: string;
}

type Action = SendAction | SuccessAction | ErrorAction;

function httpReducer(state: httpStateInt, action: Action) {
  if (action.type === httpActions.Send) {
    return {
      data: null,
      error: null,
      pending: true,
    };
  }

  if (action.type === httpActions.Success) {
    return {
      data: action.responseData,
      error: null,
      pending: false,
    };
  }

  if (action.type === httpActions.Error) {
    return {
      data: null,
      error: action.errorMessage,
      pending: false,
    };
  }

  return state;
}

const  useHttp = (requestFunction : (data : any, options? : RequestInit) => Promise<any>) => {
  const [httpState, dispatch] = useReducer(httpReducer, {
    pending: false,
    data: null,
    error: null,
  });

  const fetchController = useRef<AbortController>();

  const abortRequest = useCallback(() => {
    fetchController.current?.abort();
  }, []);

  const sendRequest = useCallback(
    async (requestData?: unknown) => {
      dispatch({ type: httpActions.Send });
      try {
        fetchController.current = new AbortController();
        const responseData = await requestFunction( requestData, {
          signal : fetchController.current.signal
        });
        dispatch({ type: httpActions.Success, responseData });
      } catch (error) {
        dispatch({
          type: httpActions.Error,
          errorMessage: (error as Error).message || "Something went wrong!",
        });
      }
    },
    [requestFunction]
  );

  return {
    sendRequest,
    abortRequest,
    ...httpState,
  };
};

export default useHttp;
