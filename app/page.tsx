import { Badge, Button, Container, Flex, Heading, Link, Section, Separator, Text } from "@radix-ui/themes";

export default function Home() {
  return (
    <main>
      <Section px="8" pb="0">
        <Flex direction="column" align="center">
          <Container pb="1">
            <Heading size="5">조해창</Heading>
          </Container>

          <Container pb="4">
            <Heading size="3" color="gray">
              데이터 분석가
            </Heading>
          </Container>

          <Text size="2">
            사회적 가치를 창출하는 서비스가 성장할 수 있는 세상을 만들어 모든 사람이 차별 없이 편리함을 누리는 것을
            꿈꾸고 있습니다. 사용자가 남긴 데이터를 통해 사용자의 마음을 읽어, 편리하고 즐겁게 사용할 수 있는 서비스를
            만들고자 합니다. 데이터를 통해 서비스가 해당 분야의 최고 서비스가 될 수 있는 성장 전략을 수립합니다.
          </Text>
        </Flex>
      </Section>

      <Section px="8" pb="0">
        <Heading size="3">SKILL</Heading>

        <Flex pt="2" pl="4" gap="2">
          <Badge color="gray" variant="outline">
            GA4
          </Badge>
          <Badge color="gray" variant="outline">
            SQL
          </Badge>
          <Badge color="gray" variant="outline">
            BigQuery
          </Badge>
          <Badge color="gray" variant="outline">
            Python
          </Badge>
        </Flex>
      </Section>

      <Section px="8" pt="8" pb="0">
        <Heading size="3">PROJECTS</Heading>

        <Flex direction="column" pt="2" pl="4" gap="3">
          <Flex align="center" gap="2">
            <Text size="2" weight="medium">
              - 싸다알라딘 사용자 행동 분석 및 유입 채널 분석
            </Text>

            <Link target="_blank" href="https://ouchc.notion.site/afa09a5a74164e13ad494eb846dd5fe4?pvs=4">
              <Button color="gray" size="1">
                자세히 보기
              </Button>
            </Link>
          </Flex>
          <Flex align="center" gap="2">
            <Text size="2" weight="medium">
              - 츠누봇 학식 조회 퍼널 개선기
            </Text>
            <Link target="_blank" href="https://ouchc.notion.site/5bb7a59f344b4502986e038ab48a8b0f?pvs=4">
              <Button color="gray" size="1">
                자세히 보기
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Section>

      <Section px="8" pt="8" pb="0">
        <Heading size="3">WORK EXPERIENCE</Heading>

        <Flex direction="column" pt="2" pl="4" gap="3">
          <Flex align="center" gap="2">
            <Text size="2" weight="medium">
              - Intern at KAIST DxD Lab
            </Text>
            <Separator orientation="vertical" color="gray" />
            <Text size="2" weight="medium">
              데이터 수집 및 시각화
            </Text>
            <Separator orientation="vertical" color="gray" />
            <Text size="2" weight="medium">
              2023.9 - 2023.11
            </Text>
          </Flex>

          <Flex align="center" gap="2">
            <Text size="2" weight="medium">
              - Intern at TOVDATA
            </Text>
            <Separator orientation="vertical" color="gray" />
            <Text size="2" weight="medium">
              UX Research
            </Text>
            <Separator orientation="vertical" color="gray" />
            <Text size="2" weight="medium">
              2023.6 - 2023.9
            </Text>
          </Flex>

          <Flex align="center" gap="2">
            <Text size="2" weight="medium">
              - Intern at TOVDATA
            </Text>
            <Separator orientation="vertical" color="gray" />
            <Text size="2" weight="medium">
              프론트엔드 개발
            </Text>
            <Separator orientation="vertical" color="gray" />
            <Text size="2" weight="medium">
              2023.3 - 2023.6
            </Text>
          </Flex>
        </Flex>
      </Section>

      <Section px="8" pt="8" pb="0">
        <Heading size="3">TEACHING EXPERIENCE</Heading>

        <Flex direction="column" pt="2" pl="4" gap="3">
          <Flex align="center" gap="2">
            <Text size="2" weight="medium">
              - SW 교양 과목
            </Text>
            <Separator orientation="vertical" color="gray" />
            <Text size="2" weight="medium">
              컴퓨터 과학적 사고 파이썬 실습 보조
            </Text>
            <Separator orientation="vertical" color="gray" />
            <Text size="2" weight="medium">
              2023.3 - 2023.6
            </Text>
          </Flex>

          <Flex align="center" gap="2">
            <Text size="2" weight="medium">
              - SW 교양 과목
            </Text>
            <Separator orientation="vertical" color="gray" />
            <Text size="2" weight="medium">
              문제 해결을 위한 코딩 기초 파이썬 실습 보조
            </Text>
            <Separator orientation="vertical" color="gray" />
            <Text size="2" weight="medium">
              2022.9 - 2022.12
            </Text>
          </Flex>
        </Flex>
      </Section>
    </main>
  );
}
