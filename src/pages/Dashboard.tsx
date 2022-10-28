import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

import { theme } from "../styles/theme";

export function Dashboard() {
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
        color: theme.colors.gray[600],
      },
      axisTicks: {
        color: theme.colors.gray[600],
      },
      categories: [
        "2022-10-15T00:00:00Z",
        "2022-10-16T00:00:00Z",
        "2022-10-17T00:00:00Z",
        "2022-10-18T00:00:00Z",
        "2022-10-19T00:00:00Z",
        "2022-10-20T00:00:00Z",
        "2022-10-21T00:00:00Z",
      ],
    },
    fill: {
      opacity: 0.3,
      type: "gradient",
      gradient: {
        shade: "dark",
        opacityFrom: 0.7,
        opacityTo: 0.3,
      },
    },
  };
  const series = [
    {
      name: "series1",
      data: [31, 120, 10, 28, 18, 51, 29],
    },
  ];
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth={320}>
          <Box p="8" bg="gray.800" borderRadius={8} pb="4">
            <Text>Inscritos na semana</Text>
            <Chart type="area" height={160} options={options} series={series} />
          </Box>

          <Box p="8" bg="gray.800" borderRadius={8} pb="4">
            <Text>Likes na semana</Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
