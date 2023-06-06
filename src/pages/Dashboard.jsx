import Svg1 from '/src/assets/images/illustration-sign-up-desktop.svg'
import Svg2 from '/src/assets/images/illustration-sign-up-mobile.svg'

import { Checkbox, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const nav = useNavigate()

  const form = useForm({
    initialValues: {
      email: '',
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  })
  return (
    <div className="bg-white md:bg-slate-700 flex justify-center items-center w-screen md:h-screen">
      <div className="flex flex-col-reverse md:flex-row md:gap-8 lg:gap-10 xl:gap-12 md:justify-center md:items-center w-[100%] lg:w-[60%] rounded-none lg:rounded-xl bg-white md:p-10">
        <div className="flex flex-col gap-10 md:gap-5 p-8 md:p-0">
          <h1 className="text-4xl font-bold font-Roboto">Stay updated!</h1>
          <p className="max-w-sm font-Roboto">
            join 60,000+ product managers receiving monthly updates on:
          </p>

          <div>
            <Checkbox
              className=" mb-4 font-medium select-none font-Roboto"
              label="Product discovery and building what matters"
              color="red"
              radius="lg"
              size="xs"
            />
            <Checkbox
              className=" mb-4 font-medium select-none font-Roboto"
              label="Measuring to ensure updates are a success"
              color="red"
              radius="lg"
              size="xs"
            />
            <Checkbox
              className=" mb-4 font-medium select-none font-Roboto"
              label="And much more!"
              color="red"
              radius="lg"
              size="xs"
            />
          </div>
          <div className="">
            <span className="font-bold font-Roboto">Email address</span>
            <form
              onSubmit={form.onSubmit((values) => {
                nav('/success')
                console.log(values)
              })}
            >
              <TextInput
                className="mt-1 mb-4 w-[100%] select-none"
                withAsterisk
                placeholder="email@company.com"
                {...form.getInputProps('email')}
              />
              <button
                type="submit"
                className="w-[100%] rounded-md bg-black hover:bg-red-500 text-white py-3 text-sm font-semibold "
              >
                Subscribe to monthly newsletter
              </button>
            </form>
          </div>
        </div>
        <div className="">
          <img className="hidden md:block w-[100%]" src={Svg1} />
          <img className="md:hidden w-[100%]" src={Svg2} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
