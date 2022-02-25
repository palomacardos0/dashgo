import { Flex, Button, Stack } from '@chakra-ui/react'
import { Input } from '../components/Form/Input'
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup"
import { SubmitHandler, useForm } from 'react-hook-form'
import { useRouter } from 'next/router';

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatória"),
})
export default function Home() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(signInFormSchema)
  })

  const router = useRouter();


  console.log(errors)

  const handleSignIn: SubmitHandler<SignInFormData | { [x: string]: any }> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    router.push('/dashboard')
    console.log(values)
  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center">

      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">

          <Input
            type="email"
            label="E-mail"
            error={errors.email}
            {...register('email')}
          >
          </Input>

          <Input
            type="password"
            label="Senha"
            error={errors.password}
            {...register('password')}
          >
          </Input>
        </Stack>

        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
          isLoading={isSubmitting}
        >Entrar</Button>
      </Flex>
    </Flex>
  )
}
