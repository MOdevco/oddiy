import {
  Box,
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

const FullDesc = ({ dataVal }) => {
  console.log(dataVal);
  return (
    <Box
      minHeight="100vh"
      display="flex"
      alignItems="start"
      width="90%"
      margin="auto"
      justifyContent="center"
      flexDirection="column"
      gap={5}
    >
      <Heading color="#1D2026" fontSize="40px" fontWeight={600}>
        Frontend kursi
      </Heading>
      <Text color="#4E5566" fontSize="20px">
        Fronentd bu saytni user korayayotgan qismi va fronetnd dasurtchi kamida
        html, css, javascrptni bilishi kerak
      </Text>
      <Box display="flex" alignItems="center" gap={20}>
        <Box display="flex" alignItems="center" gap={3}>
          <Image src={Teacher} width={50} borderRadius={35} />
          <Text color={"#6E7485"} fontSize={14}>
            Created By:{" "}
            <Text color={"#1D2026"} fontSize={16}>
              Lazizbek
            </Text>
          </Text>
        </Box>
        <Box>
          <Text display="flex" alignItems="center" gap={2}>
            {" "}
            <Box display="flex" alignItems={"center"} color={"orange"}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </Box>{" "}
            5.0
          </Text>
        </Box>
      </Box>
      <Image src={Tr} width={'100%'}  objectFit='cover' />
      {/* for tabs  */}
      <Tabs>
        <TabList>
          <Tab
            width={{ md: "250px", base: "90px" }}
            _selected={{ borderBottom: "2px solid red" }}
          >
            To'liq ma'lumot
          </Tab>
          <Tab
            width={{ md: "250px", base: "90px" }}
            _selected={{ borderBottom: "2px solid red" }}
          >
            Yordamchi mentorlar
          </Tab>
          <Tab
            width={{ md: "250px", base: "90px" }}
            _selected={{ borderBottom: "2px solid red" }}
          >
            Komentariya
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              molestias a corrupti iure nobis! Beatae dolore, eos ipsum deserunt
              animi non at, eum quisquam doloribus tempora facere. Similique
              exercitationem quae sit molestias. Error iusto nostrum assumenda
              placeat iure maiores itaque adipisci natus quis numquam commodi
              totam molestias dolores magnam excepturi aliquid eius ab doloribus
              voluptatibus, deserunt voluptatum corrupti ipsa. Quam similique
              repudiandae officiis assumenda quas natus maiores libero debitis
              ipsam, nulla nihil laudantium voluptatibus consectetur molestiae
              quisquam optio vero, odit provident facere, rerum illo nemo. Et
              neque architecto fugiat numquam minus culpa est, dolores sapiente
              libero a accusantium harum eius eum cumque veritatis voluptatibus
              impedit nesciunt? Doloribus harum quae non quam nesciunt totam
              dolorem quisquam beatae perspiciatis dolore aperiam odio porro
              tempora, similique quos delectus! Corporis saepe explicabo
              quibusdam, sint, facere adipisci neque reprehenderit est pariatur
              sunt fuga quis eligendi, rerum nam ullam provident consequuntur
              autem? Non quaerat autem, quod neque est magnam sequi blanditiis
              similique voluptatum. Optio odit laborum sapiente inventore vero,
              placeat error est! Non et tempora necessitatibus quam consequuntur
              quisquam dignissimos eos dolor repellendus, omnis sit possimus
              nostrum dolorem vero perferendis minima aperiam eum totam
              laudantium! Fuga, quisquam tenetur aperiam excepturi illum
              laboriosam mollitia. Nisi molestiae eligendi illum expedita omnis,
              mollitia illo provident consequuntur quibusdam atque sit harum
              error commodi velit dignissimos aliquid modi, eum dicta nesciunt!
              Quisquam perferendis dolores reprehenderit. Excepturi, ab totam
              mollitia molestias laboriosam aut explicabo facere quisquam
              expedita culpa dicta iure voluptate minus! Aliquam, a dolore ipsa
              autem possimus minus quaerat error nemo recusandae quod, nisi
              labore soluta, rem nam deleniti eligendi doloribus placeat iusto
              maiores? Laudantium recusandae dolores saepe optio amet deserunt
              quo cum neque error, voluptates, labore cumque tempora ad? Ipsam
              nesciunt dignissimos corporis nihil? Repudiandae quaerat eius et
              dignissimos molestiae deleniti nam est molestias, quo quam quae
              alias, laboriosam facilis voluptatem dolores debitis veritatis
              officiis ipsum. Eaque, id laudantium aperiam consequatur totam
              ducimus aut perspiciatis pariatur, in atque nostrum optio magnam
              amet mollitia, fuga cupiditate iusto sint eum repellendus?
              Nesciunt distinctio maiores cumque quos numquam temporibus
              provident vel. Beatae, eos? Assumenda, error rerum. Vitae quasi
              fugiat, ullam praesentium provident quas numquam commodi est?
              Delectus tempora consectetur, doloribus laborum dolorum aspernatur
              dolore cum. Voluptate a facilis dicta tempora maxime nobis error,
              delectus officiis, dolorum placeat repudiandae laudantium aliquid
              molestias! Officia quam temporibus veritatis, delectus ullam natus
              nesciunt aut perferendis assumenda dolorum exercitationem rerum
              ducimus nobis reprehenderit aspernatur. Distinctio quibusdam quis
              porro voluptatum perspiciatis neque quo molestias repellendus
              nesciunt corporis dolore quidem temporibus dolores pariatur, alias
              nihil repellat facilis unde adipisci ullam ipsum laudantium
              deserunt enim atque. Ullam eveniet quos ducimus vitae dolorem
              veritatis, facere quidem totam expedita quae reiciendis
              exercitationem, ratione soluta quisquam! Pariatur dicta
              accusantium exercitationem? Facilis quos labore aliquid itaque
              saepe veniam quod doloribus a, blanditiis laudantium tenetur, ex
              corporis veritatis, unde ipsum consequuntur debitis fugiat
              possimus enim explicabo officiis! Officiis expedita impedit, enim
              excepturi assumenda voluptatum dolor voluptas saepe maxime quas
              vero error reiciendis ad adipisci nihil, eligendi illo ratione
              blanditiis corrupti explicabo sit maiores! Nulla sint amet quis
              quaerat suscipit? Eveniet, tempore! Doloremque tenetur id odit sed
              harum ipsam hic assumenda, labore reprehenderit dolorem aliquid
              illum tempore omnis ad placeat architecto non unde consectetur.
              Possimus corporis rerum asperiores sequi facere laudantium, fugit
              animi dicta optio hic nobis mollitia doloribus nulla modi in,
              officia accusantium commodi placeat eveniet. Atque similique
              aliquid velit sit iste ipsa! Illum, laudantium dicta quos
              obcaecati, voluptatem itaque quod ratione exercitationem magnam a
              perspiciatis nesciunt blanditiis enim adipisci. Magni porro nihil
              esse corporis tempore cumque temporibus molestias quos sapiente
              illum, quis, pariatur similique. Dignissimos corrupti itaque
              molestiae officia sapiente, minima, aspernatur iure saepe nobis
              dolorum distinctio impedit facere! Asperiores aliquid laudantium
              impedit voluptatibus omnis, quasi tenetur beatae amet tempore
              corporis facilis natus excepturi ratione, placeat veniam culpa?
              Atque reiciendis ipsum expedita, illum odio debitis harum amet
              similique a maiores. Alias modi reprehenderit voluptatibus!
              Debitis unde totam provident possimus facere quisquam quas ipsum
              reprehenderit ex excepturi enim dolor id nemo nulla tempora
              similique cum necessitatibus voluptates, aliquam accusamus!
              Maxime, eos eligendi id laborum sequi expedita atque iure natus
              ducimus similique, vitae totam eius autem quam ex dolor? Debitis
              veritatis, odit voluptate fugiat minus ea ducimus earum ipsa.
              Illum in omnis deleniti aperiam neque architecto perferendis,
              nulla cupiditate! Corporis ducimus voluptates explicabo ullam
              eaque culpa laudantium architecto ratione reprehenderit qui alias
              natus labore fuga, commodi adipisci aliquam nihil odit corrupti
              mollitia magnam dicta temporibus, iure debitis soluta. Qui ducimus
              quidem est fugit, ex quaerat assumenda doloribus nesciunt ipsa!
              Ipsa, repellendus qui, reiciendis nemo aut eos rerum numquam autem
              maxime rem laborum dolor? Magni facere doloremque quo? Ipsam
              incidunt odit tempore ratione atque corporis, provident
              consequatur, molestias itaque maxime ducimus deleniti laboriosam
              aperiam modi nobis illo nemo facilis beatae ipsa perferendis
              adipisci vitae. Hic enim nisi ex a repudiandae provident quidem
              libero perferendis voluptate. Non, tenetur veniam.
            </Text>
          </TabPanel>
          <TabPanel>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              molestias a corrupti iure nobis! Beatae dolore, eos ipsum deserunt
              animi non at, eum quisquam doloribus tempora facere. Similique
              exercitationem quae sit molestias. Error iusto nostrum assumenda
              placeat iure maiores itaque adipisci natus quis numquam commodi
              totam molestias dolores magnam excepturi aliquid eius ab doloribus
              voluptatibus, deserunt voluptatum corrupti ipsa. Quam similique
              repudiandae officiis assumenda quas natus maiores libero debitis
              ipsam, nulla nihil laudantium voluptatibus consectetur molestiae
              quisquam optio vero, odit provident facere, rerum illo nemo. Et
              neque architecto fugiat numquam minus culpa est, dolores sapiente
              libero a accusantium harum eius eum cumque veritatis voluptatibus
              impedit nesciunt? Doloribus harum quae non quam nesciunt totam
              dolorem quisquam beatae perspiciatis dolore aperiam odio porro
              tempora, similique quos delectus! Corporis saepe explicabo
              quibusdam, sint, facere adipisci neque reprehenderit est pariatur
              sunt fuga quis eligendi, rerum nam ullam provident consequuntur
              autem? Non quaerat autem, quod neque est magnam sequi blanditiis
              similique voluptatum. Optio odit laborum sapiente inventore vero,
              placeat error est! Non et tempora necessitatibus quam consequuntur
              quisquam dignissimos eos dolor repellendus, omnis sit possimus
              nostrum dolorem vero perferendis minima aperiam eum totam
              laudantium! Fuga, quisquam tenetur aperiam excepturi illum
              laboriosam mollitia. Nisi molestiae eligendi illum expedita omnis,
              mollitia illo provident consequuntur quibusdam atque sit harum
              error commodi velit dignissimos aliquid modi, eum dicta nesciunt!
              Quisquam perferendis dolores reprehenderit. Excepturi, ab totam
              mollitia molestias laboriosam aut explicabo facere quisquam
              expedita culpa dicta iure voluptate minus! Aliquam, a dolore ipsa
              autem possimus minus quaerat error nemo recusandae quod, nisi
              labore soluta, rem nam deleniti eligendi doloribus placeat iusto
              maiores? Laudantium recusandae dolores saepe optio amet deserunt
              quo cum neque error, voluptates, labore cumque tempora ad? Ipsam
              nesciunt dignissimos corporis nihil? Repudiandae quaerat eius et
              dignissimos molestiae deleniti nam est molestias, quo quam quae
              alias, laboriosam facilis voluptatem dolores debitis veritatis
              officiis ipsum. Eaque, id laudantium aperiam consequatur totam
              ducimus aut perspiciatis pariatur, in atque nostrum optio magnam
              amet mollitia, fuga cupiditate iusto sint eum repellendus?
              Nesciunt distinctio maiores cumque quos numquam temporibus
              provident vel. Beatae, eos? Assumenda, error rerum. Vitae quasi
              fugiat, ullam praesentium provident quas numquam commodi est?
              Delectus tempora consectetur, doloribus laborum dolorum aspernatur
              dolore cum. Voluptate a facilis dicta tempora maxime nobis error,
              delectus officiis, dolorum placeat repudiandae laudantium aliquid
              molestias! Officia quam temporibus veritatis, delectus ullam natus
              nesciunt aut perferendis assumenda dolorum exercitationem rerum
              ducimus nobis reprehenderit aspernatur. Distinctio quibusdam quis
              porro voluptatum perspiciatis neque quo molestias repellendus
              nesciunt corporis dolore quidem temporibus dolores pariatur, alias
              nihil repellat facilis unde adipisci ullam ipsum laudantium
              deserunt enim atque. Ullam eveniet quos ducimus vitae dolorem
              veritatis, facere quidem totam expedita quae reiciendis
              exercitationem, ratione soluta quisquam! Pariatur dicta
              accusantium exercitationem? Facilis quos labore aliquid itaque
              saepe veniam quod doloribus a, blanditiis laudantium tenetur, ex
              corporis veritatis, unde ipsum consequuntur debitis fugiat
              possimus enim explicabo officiis! Officiis expedita impedit, enim
              excepturi assumenda voluptatum dolor voluptas saepe maxime quas
              vero error reiciendis ad adipisci nihil, eligendi illo ratione
              blanditiis corrupti explicabo sit maiores! Nulla sint amet quis
              quaerat suscipit? Eveniet, tempore! Doloremque tenetur id odit sed
              harum ipsam hic assumenda, labore reprehenderit dolorem aliquid
              illum tempore omnis ad placeat architecto non unde consectetur.
              Possimus corporis rerum asperiores sequi facere laudantium, fugit
              animi dicta optio hic nobis mollitia doloribus nulla modi in,
              officia accusantium commodi placeat eveniet. Atque similique
              aliquid velit sit iste ipsa! Illum, laudantium dicta quos
              obcaecati, voluptatem itaque quod ratione exercitationem magnam a
              perspiciatis nesciunt blanditiis enim adipisci. Magni porro nihil
              esse corporis tempore cumque temporibus molestias quos sapiente
              illum, quis, pariatur similique. Dignissimos corrupti itaque
              molestiae officia sapiente, minima, aspernatur iure saepe nobis
              dolorum distinctio impedit facere! Asperiores aliquid laudantium
              impedit voluptatibus omnis, quasi tenetur beatae amet tempore
              corporis facilis natus excepturi ratione, placeat veniam culpa?
              Atque reiciendis ipsum expedita, illum odio debitis harum amet
              similique a maiores. Alias modi reprehenderit voluptatibus!
              Debitis unde totam provident possimus facere quisquam quas ipsum
              reprehenderit ex excepturi enim dolor id nemo nulla tempora
              similique cum necessitatibus voluptates, aliquam accusamus!
              Maxime, eos eligendi id laborum sequi expedita atque iure natus
              ducimus similique, vitae totam eius autem quam ex dolor? Debitis
              veritatis, odit voluptate fugiat minus ea ducimus earum ipsa.
              Illum in omnis deleniti aperiam neque architecto perferendis,
              nulla cupiditate! Corporis ducimus voluptates explicabo ullam
              eaque culpa laudantium architecto ratione reprehenderit qui alias
              natus labore fuga, commodi adipisci aliquam nihil odit corrupti
              mollitia magnam dicta temporibus, iure debitis soluta. Qui ducimus
              quidem est fugit, ex quaerat assumenda doloribus nesciunt ipsa!
              Ipsa, repellendus qui, reiciendis nemo aut eos rerum numquam autem
              maxime rem laborum dolor? Magni facere doloremque quo? Ipsam
              incidunt odit tempore ratione atque corporis, provident
              consequatur, molestias itaque maxime ducimus deleniti laboriosam
              aperiam modi nobis illo nemo facilis beatae ipsa perferendis
              adipisci vitae. Hic enim nisi ex a repudiandae provident quidem
              libero perferendis voluptate. Non, tenetur veniam.
            </Text>
          </TabPanel>
          <TabPanel>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              molestias a corrupti iure nobis! Beatae dolore, eos ipsum deserunt
              animi non at, eum quisquam doloribus tempora facere. Similique
              exercitationem quae sit molestias. Error iusto nostrum assumenda
              placeat iure maiores itaque adipisci natus quis numquam commodi
              totam molestias dolores magnam excepturi aliquid eius ab doloribus
              voluptatibus, deserunt voluptatum corrupti ipsa. Quam similique
              repudiandae officiis assumenda quas natus maiores libero debitis
              ipsam, nulla nihil laudantium voluptatibus consectetur molestiae
              quisquam optio vero, odit provident facere, rerum illo nemo. Et
              neque architecto fugiat numquam minus culpa est, dolores sapiente
              libero a accusantium harum eius eum cumque veritatis voluptatibus
              impedit nesciunt? Doloribus harum quae non quam nesciunt totam
              dolorem quisquam beatae perspiciatis dolore aperiam odio porro
              tempora, similique quos delectus! Corporis saepe explicabo
              quibusdam, sint, facere adipisci neque reprehenderit est pariatur
              sunt fuga quis eligendi, rerum nam ullam provident consequuntur
              autem? Non quaerat autem, quod neque est magnam sequi blanditiis
              similique voluptatum. Optio odit laborum sapiente inventore vero,
              placeat error est! Non et tempora necessitatibus quam consequuntur
              quisquam dignissimos eos dolor repellendus, omnis sit possimus
              nostrum dolorem vero perferendis minima aperiam eum totam
              laudantium! Fuga, quisquam tenetur aperiam excepturi illum
              laboriosam mollitia. Nisi molestiae eligendi illum expedita omnis,
              mollitia illo provident consequuntur quibusdam atque sit harum
              error commodi velit dignissimos aliquid modi, eum dicta nesciunt!
              Quisquam perferendis dolores reprehenderit. Excepturi, ab totam
              mollitia molestias laboriosam aut explicabo facere quisquam
              expedita culpa dicta iure voluptate minus! Aliquam, a dolore ipsa
              autem possimus minus quaerat error nemo recusandae quod, nisi
              labore soluta, rem nam deleniti eligendi doloribus placeat iusto
              maiores? Laudantium recusandae dolores saepe optio amet deserunt
              quo cum neque error, voluptates, labore cumque tempora ad? Ipsam
              nesciunt dignissimos corporis nihil? Repudiandae quaerat eius et
              dignissimos molestiae deleniti nam est molestias, quo quam quae
              alias, laboriosam facilis voluptatem dolores debitis veritatis
              officiis ipsum. Eaque, id laudantium aperiam consequatur totam
              ducimus aut perspiciatis pariatur, in atque nostrum optio magnam
              amet mollitia, fuga cupiditate iusto sint eum repellendus?
              Nesciunt distinctio maiores cumque quos numquam temporibus
              provident vel. Beatae, eos? Assumenda, error rerum. Vitae quasi
              fugiat, ullam praesentium provident quas numquam commodi est?
              Delectus tempora consectetur, doloribus laborum dolorum aspernatur
              dolore cum. Voluptate a facilis dicta tempora maxime nobis error,
              delectus officiis, dolorum placeat repudiandae laudantium aliquid
              molestias! Officia quam temporibus veritatis, delectus ullam natus
              nesciunt aut perferendis assumenda dolorum exercitationem rerum
              ducimus nobis reprehenderit aspernatur. Distinctio quibusdam quis
              porro voluptatum perspiciatis neque quo molestias repellendus
              nesciunt corporis dolore quidem temporibus dolores pariatur, alias
              nihil repellat facilis unde adipisci ullam ipsum laudantium
              deserunt enim atque. Ullam eveniet quos ducimus vitae dolorem
              veritatis, facere quidem totam expedita quae reiciendis
              exercitationem, ratione soluta quisquam! Pariatur dicta
              accusantium exercitationem? Facilis quos labore aliquid itaque
              saepe veniam quod doloribus a, blanditiis laudantium tenetur, ex
              corporis veritatis, unde ipsum consequuntur debitis fugiat
              possimus enim explicabo officiis! Officiis expedita impedit, enim
              excepturi assumenda voluptatum dolor voluptas saepe maxime quas
              vero error reiciendis ad adipisci nihil, eligendi illo ratione
              blanditiis corrupti explicabo sit maiores! Nulla sint amet quis
              quaerat suscipit? Eveniet, tempore! Doloremque tenetur id odit sed
              harum ipsam hic assumenda, labore reprehenderit dolorem aliquid
              illum tempore omnis ad placeat architecto non unde consectetur.
              Possimus corporis rerum asperiores sequi facere laudantium, fugit
              animi dicta optio hic nobis mollitia doloribus nulla modi in,
              officia accusantium commodi placeat eveniet. Atque similique
              aliquid velit sit iste ipsa! Illum, laudantium dicta quos
              obcaecati, voluptatem itaque quod ratione exercitationem magnam a
              perspiciatis nesciunt blanditiis enim adipisci. Magni porro nihil
              esse corporis tempore cumque temporibus molestias quos sapiente
              illum, quis, pariatur similique. Dignissimos corrupti itaque
              molestiae officia sapiente, minima, aspernatur iure saepe nobis
              dolorum distinctio impedit facere! Asperiores aliquid laudantium
              impedit voluptatibus omnis, quasi tenetur beatae amet tempore
              corporis facilis natus excepturi ratione, placeat veniam culpa?
              Atque reiciendis ipsum expedita, illum odio debitis harum amet
              similique a maiores. Alias modi reprehenderit voluptatibus!
              Debitis unde totam provident possimus facere quisquam quas ipsum
              reprehenderit ex excepturi enim dolor id nemo nulla tempora
              similique cum necessitatibus voluptates, aliquam accusamus!
              Maxime, eos eligendi id laborum sequi expedita atque iure natus
              ducimus similique, vitae totam eius autem quam ex dolor? Debitis
              veritatis, odit voluptate fugiat minus ea ducimus earum ipsa.
              Illum in omnis deleniti aperiam neque architecto perferendis,
              nulla cupiditate! Corporis ducimus voluptates explicabo ullam
              eaque culpa laudantium architecto ratione reprehenderit qui alias
              natus labore fuga, commodi adipisci aliquam nihil odit corrupti
              mollitia magnam dicta temporibus, iure debitis soluta. Qui ducimus
              quidem est fugit, ex quaerat assumenda doloribus nesciunt ipsa!
              Ipsa, repellendus qui, reiciendis nemo aut eos rerum numquam autem
              maxime rem laborum dolor? Magni facere doloremque quo? Ipsam
              incidunt odit tempore ratione atque corporis, provident
              consequatur, molestias itaque maxime ducimus deleniti laboriosam
              aperiam modi nobis illo nemo facilis beatae ipsa perferendis
              adipisci vitae. Hic enim nisi ex a repudiandae provident quidem
              libero perferendis voluptate. Non, tenetur veniam.
            </Text>
          </TabPanel>
          <TabPanel>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              molestias a corrupti iure nobis! Beatae dolore, eos ipsum deserunt
              animi non at, eum quisquam doloribus tempora facere. Similique
              exercitationem quae sit molestias. Error iusto nostrum assumenda
              placeat iure maiores itaque adipisci natus quis numquam commodi
              totam molestias dolores magnam excepturi aliquid eius ab doloribus
              voluptatibus, deserunt voluptatum corrupti ipsa. Quam similique
              repudiandae officiis assumenda quas natus maiores libero debitis
              ipsam, nulla nihil laudantium voluptatibus consectetur molestiae
              quisquam optio vero, odit provident facere, rerum illo nemo. Et
              neque architecto fugiat numquam minus culpa est, dolores sapiente
              libero a accusantium harum eius eum cumque veritatis voluptatibus
              impedit nesciunt? Doloribus harum quae non quam nesciunt totam
              dolorem quisquam beatae perspiciatis dolore aperiam odio porro
              tempora, similique quos delectus! Corporis saepe explicabo
              quibusdam, sint, facere adipisci neque reprehenderit est pariatur
              sunt fuga quis eligendi, rerum nam ullam provident consequuntur
              autem? Non quaerat autem, quod neque est magnam sequi blanditiis
              similique voluptatum. Optio odit laborum sapiente inventore vero,
              placeat error est! Non et tempora necessitatibus quam consequuntur
              quisquam dignissimos eos dolor repellendus, omnis sit possimus
              nostrum dolorem vero perferendis minima aperiam eum totam
              laudantium! Fuga, quisquam tenetur aperiam excepturi illum
              laboriosam mollitia. Nisi molestiae eligendi illum expedita omnis,
              mollitia illo provident consequuntur quibusdam atque sit harum
              error commodi velit dignissimos aliquid modi, eum dicta nesciunt!
              Quisquam perferendis dolores reprehenderit. Excepturi, ab totam
              mollitia molestias laboriosam aut explicabo facere quisquam
              expedita culpa dicta iure voluptate minus! Aliquam, a dolore ipsa
              autem possimus minus quaerat error nemo recusandae quod, nisi
              labore soluta, rem nam deleniti eligendi doloribus placeat iusto
              maiores? Laudantium recusandae dolores saepe optio amet deserunt
              quo cum neque error, voluptates, labore cumque tempora ad? Ipsam
              nesciunt dignissimos corporis nihil? Repudiandae quaerat eius et
              dignissimos molestiae deleniti nam est molestias, quo quam quae
              alias, laboriosam facilis voluptatem dolores debitis veritatis
              officiis ipsum. Eaque, id laudantium aperiam consequatur totam
              ducimus aut perspiciatis pariatur, in atque nostrum optio magnam
              amet mollitia, fuga cupiditate iusto sint eum repellendus?
              Nesciunt distinctio maiores cumque quos numquam temporibus
              provident vel. Beatae, eos? Assumenda, error rerum. Vitae quasi
              fugiat, ullam praesentium provident quas numquam commodi est?
              Delectus tempora consectetur, doloribus laborum dolorum aspernatur
              dolore cum. Voluptate a facilis dicta tempora maxime nobis error,
              delectus officiis, dolorum placeat repudiandae laudantium aliquid
              molestias! Officia quam temporibus veritatis, delectus ullam natus
              nesciunt aut perferendis assumenda dolorum exercitationem rerum
              ducimus nobis reprehenderit aspernatur. Distinctio quibusdam quis
              porro voluptatum perspiciatis neque quo molestias repellendus
              nesciunt corporis dolore quidem temporibus dolores pariatur, alias
              nihil repellat facilis unde adipisci ullam ipsum laudantium
              deserunt enim atque. Ullam eveniet quos ducimus vitae dolorem
              veritatis, facere quidem totam expedita quae reiciendis
              exercitationem, ratione soluta quisquam! Pariatur dicta
              accusantium exercitationem? Facilis quos labore aliquid itaque
              saepe veniam quod doloribus a, blanditiis laudantium tenetur, ex
              corporis veritatis, unde ipsum consequuntur debitis fugiat
              possimus enim explicabo officiis! Officiis expedita impedit, enim
              excepturi assumenda voluptatum dolor voluptas saepe maxime quas
              vero error reiciendis ad adipisci nihil, eligendi illo ratione
              blanditiis corrupti explicabo sit maiores! Nulla sint amet quis
              quaerat suscipit? Eveniet, tempore! Doloremque tenetur id odit sed
              harum ipsam hic assumenda, labore reprehenderit dolorem aliquid
              illum tempore omnis ad placeat architecto non unde consectetur.
              Possimus corporis rerum asperiores sequi facere laudantium, fugit
              animi dicta optio hic nobis mollitia doloribus nulla modi in,
              officia accusantium commodi placeat eveniet. Atque similique
              aliquid velit sit iste ipsa! Illum, laudantium dicta quos
              obcaecati, voluptatem itaque quod ratione exercitationem magnam a
              perspiciatis nesciunt blanditiis enim adipisci. Magni porro nihil
              esse corporis tempore cumque temporibus molestias quos sapiente
              illum, quis, pariatur similique. Dignissimos corrupti itaque
              molestiae officia sapiente, minima, aspernatur iure saepe nobis
              dolorum distinctio impedit facere! Asperiores aliquid laudantium
              impedit voluptatibus omnis, quasi tenetur beatae amet tempore
              corporis facilis natus excepturi ratione, placeat veniam culpa?
              Atque reiciendis ipsum expedita, illum odio debitis harum amet
              similique a maiores. Alias modi reprehenderit voluptatibus!
              Debitis unde totam provident possimus facere quisquam quas ipsum
              reprehenderit ex excepturi enim dolor id nemo nulla tempora
              similique cum necessitatibus voluptates, aliquam accusamus!
              Maxime, eos eligendi id laborum sequi expedita atque iure natus
              ducimus similique, vitae totam eius autem quam ex dolor? Debitis
              veritatis, odit voluptate fugiat minus ea ducimus earum ipsa.
              Illum in omnis deleniti aperiam neque architecto perferendis,
              nulla cupiditate! Corporis ducimus voluptates explicabo ullam
              eaque culpa laudantium architecto ratione reprehenderit qui alias
              natus labore fuga, commodi adipisci aliquam nihil odit corrupti
              mollitia magnam dicta temporibus, iure debitis soluta. Qui ducimus
              quidem est fugit, ex quaerat assumenda doloribus nesciunt ipsa!
              Ipsa, repellendus qui, reiciendis nemo aut eos rerum numquam autem
              maxime rem laborum dolor? Magni facere doloremque quo? Ipsam
              incidunt odit tempore ratione atque corporis, provident
              consequatur, molestias itaque maxime ducimus deleniti laboriosam
              aperiam modi nobis illo nemo facilis beatae ipsa perferendis
              adipisci vitae. Hic enim nisi ex a repudiandae provident quidem
              libero perferendis voluptate. Non, tenetur veniam.
            </Text>
          </TabPanel>
        </TabPanels>
      </Tabs>

      {/* for scroll button  */}
      <ScrollToTop smooth style={{ paddingLeft: "5px"}} />
    </Box>
  );
};

export default FullDesc;
