import useSWR from "swr";
import { useTheme } from "next-themes";
import fetcher from "lib/fetcher";
import { Data, StringProps } from "lib/types";
import { Flex } from "components/Layout/Container/styles";
import {
  AuthorContainer,
  Container,
  Item,
} from "components/ProjectList/styles";

export const ProjectList = () => {
  const { resolvedTheme } = useTheme();
  const { data } = useSWR<Data>("/api/projects", fetcher);

  return (
    <Container>
      {data?.map((item: StringProps, id: number) => (
        <Item isLeft={id % 2 !== 0} key={id}>
          
          {/* Will be replaced by video or screenshots or logo
          {item.picture && (
            <Image
              src={`/assets/svg/${
                resolvedTheme !== "dark"
                  ? `${item.picture}`
                  : `${item.picture}-light`
              }.svg`}
              alt={`Logo of ${item.picture}`}
              width={(item.pictureWidth as string) || "86px"}
              height="56px"
              layout="fixed"
              placeholder="blur"
              blurDataURL="blur"
            />
          )} */}
          <h3>{item.title}</h3>
          <p>{item.text}</p>
          {item.author && (
            <Flex justify={id % 2 !== 0 ? "flex-end" : "flex-start"}>
              <AuthorContainer darkTheme={resolvedTheme === "dark"}>
                <span>{item.author}</span>
                <span>{item.time}</span>
                <span>Stack or Tools: {item.tools}</span>
                <span>{item.language}</span>
              </AuthorContainer>
            </Flex>
          )}
        </Item>
      ))}
    </Container>
  );
};
