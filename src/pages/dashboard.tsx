import { Header } from "../components/Header";
import dynamic from "next/dynamic";
import { Flex, SimpleGrid, Box, Text } from "@chakra-ui/react";
import { Sidebar } from "../components/Sidebar";
import theme from "@chakra-ui/core/dist/theme";
//carrega o componente de forma dinamica 
const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
})

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: "datetime" as "datetime",
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      '2021-06-23T00:00:00.000Z',
      '2021-06-24T00:00:00.000Z',
      '2021-06-25T00:00:00.000Z',
      '2021-06-26T00:00:00.000Z',
      '2021-06-27T00:00:00.000Z',
      '2021-06-28T00:00:00.000Z',
      '2021-06-29T00:00:00.000Z',
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7
    },
  }



};







const series2 = [
  {
    name: 'series2',
    data: [58, 20, 120, 13, 9, 130, 50]

  }
]
const series = [
  {
    name: 'series1',
    data: [43, 120, 41, 67, 89, 23, 18]

  }
]
export default function Dashbord() {
  return (


    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="328px" align="flex-start">
          <Box
            p={["6", "8"]}
            bg="gray.800"
            borderRadius={8}
            pb="4"
          >
            <Text fontSize="lg" mb="4">
              Inscritos da semana
            </Text>
            <Chart type="area" height={160} options={options} series={series} />
          </Box>
          <Box
            p="8"
            bg="gray.800"
            borderRadius={8}
            pb="4"
          >
            <Text fontSize="lg" mb="4">
              Taxa de abertura
            </Text>
            <Chart type="area" height={160} options={options} series={series2} />
          </Box>
        </SimpleGrid>

      </Flex>
    </Flex>
  )
}