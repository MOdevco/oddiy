import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  Divider,
  Heading,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";
import { Course, Teacher, Tr } from "../assets";
import { FaStar } from "react-icons/fa";
import { api } from "../api/api";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const FullDesc = ({ dataVal }) => {
  console.log(dataVal);

  useEffect(() => {
    window.scroll(0,0)
} ,[])
  return (
    
    <Box
      pt={'30px'}
      minHeight="100vh"
      display="flex"
      alignItems="start"
      width="90%"
      margin="auto"
      justifyContent="center"
      flexDirection="column"
      gap={5}
      minH={'100vh'}
    >
      <Heading color="#1D2026" fontSize="40px" fontWeight={600}>
        Kurs haqida to'liq tanishing
      </Heading>
      <Text color="#4E5566" fontSize="20px">
        {dataVal.course.description}
      </Text>
      <Box display="flex" alignItems="center" gap={{base: 5 , md: 20}} flexDirection={{base: 'column' , md: 'row'}}>
        <Box display="flex" alignItems="center" gap={3}>
          <Avatar src={`${api}api/image/?id=${dataVal.mentor === null ? '' : dataVal.mentor.employee.photo.id}`} />
          <Text color={"#6E7485"} fontSize={14}>
            {dataVal.mentor === null ? 'Mentor belgilanmagan': dataVal.mentor.employee.face.firstname}
            <Text color={"#1D2026"} fontSize={16}>
              {dataVal.mentor === null ? 'Mentor belgilanmagan' : dataVal.mentor.employee.face.lastname}
            </Text>
          </Text>
        </Box>
        <Box>
          <Text display="flex" alignItems="center" gap={2}>
            {" "}
            <Box display="flex" alignItems={"center"} color={"orange"}>
              <Text>O'quvchilar</Text>
            </Box>{" "}
            {dataVal.reception_counter.activeCount} ta
          </Text>
          <Text display="flex" alignItems="center" gap={2}>
            {" "}
            <Box display="flex" alignItems={"center"} color={"orange"}>
              <Text>Tajriba</Text>
            </Box>{" "}
            {dataVal.mentor === null ? 'Mentor belgilanmagan' :` ${dataVal.mentor.employee.practice} yil` }
          </Text>
        </Box>
      </Box>
      <Image src={`${api}api/image/?id=${dataVal.course.previewPhoto.id}`}  width={'100%'}  objectFit='cover' />
      {/* for tabs  */}
      <Tabs width={'100%'} colorScheme="#000">
        <TabList >
          <Tab
          >
            To'liq ma'lumot
          </Tab>
          <Tab
          >
            Yordamchi mentorlar
          </Tab>
          <Tab
          >
            Komentariya
          </Tab>
        </TabList>

        <TabPanels >
          <TabPanel display={'flex'} flexDirection={'column'} gap={5}>
            <Box>
              <Heading fontSize={'25px'}>Kurs kimlar uchun?</Heading>
              <Text fontSize={'17px'} fontWeight={'500'}> Kurs: {dataVal.course.courseFor.name}</Text>
            </Box>

            <Box>
              <Heading fontSize={'25px'}>Kurs nomi</Heading>
              <Text fontSize={'17px'} fontWeight={'500'}> Kurs: {dataVal.course.name}</Text>
            </Box>

            <Box>
              <Heading fontSize={'25px'}>Kurs turi</Heading>
              <Text fontSize={'17px'} fontWeight={'500'}> Kurs: {dataVal.course.courseType.name}</Text>
            </Box>

            <Box>
              
              <Text fontSize={'17px'} fontWeight={'500'}> Ma'lumot: {dataVal.course.courseType.description.name}</Text>
            </Box>

          </TabPanel>
          <TabPanel display={'flex'} flexDirection={'column'} gap={5}>
            <Box>
              <Heading fontSize={'25px'}>Hozircha ma'lumot mavjud emas :(</Heading>
            </Box>
          </TabPanel>
          <TabPanel display={'flex'} flexDirection={'column'} gap={5}>
            <Box>
              <Heading fontSize={'25px'}>Hozircha ma'lumot mavjud emas :(</Heading>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Link to={'/'}>
        <Button display={'flex'} alignItems={'center'} gap={1} fontSize={'20px'} mb={20} h={'50px'} bg={'#000'} _hover={{bg: ''}} width={'300px'} color={'#fff'}><ArrowBackIcon /> Ko'proq kurga yozilish</Button>
      </Link>

      {/* for scroll button  */}
     
    </Box>
  );
};

export default FullDesc;
