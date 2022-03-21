import useSWR from "swr";
import fetcher from "lib/fetcher";
import { Flex } from "components/Layout/Container/styles";
import { Container, Item } from "components/Posts/styles";
import { Data, ProjectsProps } from "lib/types";

export const Projects = () => {
  const { data } = useSWR<Data>("/api/projects", fetcher);

  return (
    <Container>
      <h3>Projects</h3>
        {data?.map((item: ProjectsProps, id: number) => {
          return (
            <a
              href={item.url} //item.homepage which is in the about.
              target="_blank"
              className="color-black"
              key={id}
              rel="noopener noreferrer"
            >
              <Item>
                <Flex>
                  <Flex>
                    <span className="item-number">{`${id < 9 ? "0" : ""}${
                      id + 1
                    }`}</span>
                    <h4>{item.title}</h4>
                  </Flex>
                  {/* <span>{item.stars} Stars</span> */}
                </Flex>
                <p>{item.short_intro}</p>
              </Item>
            </a>
          );
        })}

    </Container>
  );
};
