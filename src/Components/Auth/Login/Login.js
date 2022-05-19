import {
  TextInput,
  Checkbox,
  Button,
  Group,
  Box,
  Divider,
  PasswordInput,
  Text,
  Highlight,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) =>
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value)
          ? null
          : 'Password must contain 8 characters, 1 letter and 1 number',
    },
  });

  const navigate = useNavigate();

  const naviagteToSignup = () => {
    navigate('/signup');
  };

  const handleSubmit = (values) => {
    console.log(values);
    form.reset();
  };
  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form
        className="min-w-64 flex flex-col gap-3"
        onSubmit={form.onSubmit((values) => {
          handleSubmit(values);
        })}
      >
        <TextInput
          required
          label="Email"
          placeholder="Enter your email"
          {...form.getInputProps('email')}
        />

        <PasswordInput
          required
          label="Password"
          placeholder="Password"
          {...form.getInputProps('password')}
        />

        <Text component="h1" size="sm">
          Forgot password?{' '}
          <Highlight
            className="cursor-pointer"
            size="sm"
            align=""
            component="span"
            onClick={() => {
              console.log('Clicke');
            }}
            highlight="Click here to reset password"
            highlightStyles={(theme) => ({
              backgroundImage: theme.fn.linearGradient(
                45,
                theme.colors.cyan[5],
                theme.colors.indigo[5]
              ),
              fontWeight: 700,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            })}
          >
            Click here to reset password
          </Highlight>
        </Text>

        <Button fullWidth variant="default" type="submit" mb="xl">
          Login
        </Button>
      </form>
      <Text component="h1" size="sm">
        New to Aroma Central?{' '}
        <Highlight
          className="cursor-pointer	"
          size="sm"
          align=""
          component="span"
          onClick={() => {
            naviagteToSignup();
          }}
          highlight="Create New Account"
          highlightStyles={(theme) => ({
            backgroundImage: theme.fn.linearGradient(
              45,
              theme.colors.cyan[5],
              theme.colors.indigo[5]
            ),
            fontWeight: 700,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          })}
        >
          Create New Account
        </Highlight>
      </Text>
      <Divider size={2} my="xl" />
      <Button fullWidth variant="default">
        <img src="/images/google.svg" className="w-8 mr-10" />
        <h3 className="ml-2 mr-10">Login With Google</h3>
      </Button>
    </Box>
  );
};
export default Login;
