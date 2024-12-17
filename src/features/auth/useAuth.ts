import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { login as loginApi, register as registerApi} from "@/api/auth";
import { useToast } from "@/hooks/use-toast";


type AuthMode = 'login' | 'register';

function useAuth(mode: AuthMode) {
  const navigate = useNavigate();
  const { toast } = useToast();

  const { mutate: auth, isLoading, isError, error } = useMutation({
    mutationFn: mode === 'login' ? loginApi : registerApi,
    onSuccess: (data) => {
      toast({
        description: 'OTP has been sent to your email.',
        variant: 'success',
      });
      navigate(`/verify-otp?email=${data?.email}`);
    },
    onError: (error: Error) => {
      toast({
        description: error.message,
      });
    },
  });

  return { auth, isLoading, isError, error };
}

export default useAuth;
