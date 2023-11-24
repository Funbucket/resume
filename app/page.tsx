import { Badge, Button, Container, Flex, Heading, Link, Section, Separator, Text } from "@radix-ui/themes";

export default function Home() {
  return (
    <main>
      <Container size="2" py="9">
        <Section px="8" py="0">
          <Flex direction="column" align="center">
            <Container pb="1">
              <Heading size="5">조해창</Heading>
            </Container>

            <Container py="0">
              <Heading size="3" color="gray">
                데이터 분석가
              </Heading>
            </Container>

            <Flex pb="4" align="center" gap="2">
              <Link color="gray" target="_blank" href="mailto:outofchng@gmail.com">
                <Text size="2">Email</Text>
              </Link>
              <Separator orientation="vertical" color="gray" />
              <Link color="gray" target="_blank" href="https://github.com/Funbucket">
                <Text size="2">Github</Text>
              </Link>
            </Flex>

            <Flex direction="column" gap="1">
              <Text size="2">
                사회적 가치를 창출하는 서비스가 성장할 수 있는 세상을 만들어 모든 사람이 차별 없이 편리함을 누리는 것을
                꿈꾸고 있습니다.
              </Text>

              <Text size="2">
                • 사용자가 남긴 데이터를 통해 사용자의 마음을 읽어, 편리하고 즐겁게 사용할 수 있는 서비스를 만들고자
                합니다.
              </Text>

              <Text size="2">
                • 데이터를 통해 서비스가 해당 분야의 최고 서비스가 될 수 있는 성장 전략을 수립합니다.
              </Text>
            </Flex>
          </Flex>
        </Section>

        <Section px="8" pb="0">
          <Heading size="3">SKILL</Heading>

          <Flex direction="column" pt="2" pl="4" gap="2">
            <Flex align="center" gap="2">
              <Text size="2" weight="medium">
                -
              </Text>
              <Badge color="gray" variant="outline">
                GA4
              </Badge>
              <Text size="2" weight="medium">
                를 사용하여 AARRR 지표를 중심으로 서비스를 분석한 경험이 있습니다.
              </Text>
            </Flex>

            <Flex align="center" gap="2">
              <Text size="2" weight="medium">
                -
              </Text>
              <Badge color="gray" variant="outline">
                GTM
              </Badge>
              <Text size="2" weight="medium">
                을 사용하여 서비스의 이벤트를 심어 로깅한 경험이 있습니다.
              </Text>
            </Flex>

            <Flex align="center" gap="2">
              <Text size="2" weight="medium">
                -
              </Text>
              <Badge color="gray" variant="outline">
                BigQuery
              </Badge>
              <Text size="2" weight="medium">
                에서
              </Text>
              <Badge color="gray" variant="outline">
                SQL
              </Badge>
              <Text size="2" weight="medium">
                을 이용하여 서비스의 데이터를 추출한 경험이 있습니다.
              </Text>
            </Flex>

            <Flex align="center" gap="2">
              <Text size="2" weight="medium">
                -
              </Text>
              <Badge color="gray" variant="outline">
                HTML
              </Badge>
              <Text size="2" weight="medium">
                에 익숙하여
              </Text>
              <Badge color="gray" variant="outline">
                Crawling
              </Badge>
              <Text size="2" weight="medium">
                을 통한 데이터 수집에 매우 익숙합니다.
              </Text>
            </Flex>

            <Flex align="center" gap="2">
              <Text size="2" weight="medium">
                -
              </Text>
              <Badge color="gray" variant="outline">
                Database
              </Badge>
              <Text size="2" weight="medium">
                개념적 설계부터 구축을 한 경험이 있습니다.
              </Text>
            </Flex>

            <Flex align="center" gap="2">
              <Text size="2" weight="medium">
                -
              </Text>
              <Badge color="gray" variant="outline">
                Python
              </Badge>
              <Text size="2" weight="medium">
                을 이용하여 실제 서비스를 배포한 경험과 비정형 데이터 분석 경험이 있습니다.
              </Text>
            </Flex>
          </Flex>
        </Section>

        <Section px="8" pt="8" pb="0">
          <Heading size="3">PROJECTS</Heading>

          <Flex direction="column" pt="2" pl="4" gap="3">
            <Flex align="center" gap="2">
              <Text size="2" weight="medium">
                - 온라인 중고책의 다나와를 위한 여정, 싸다알라딘 사용자 행동 분석 및 유입 채널 분석
              </Text>

              <Link target="_blank" href="https://ouchc.notion.site/afa09a5a74164e13ad494eb846dd5fe4?pvs=4">
                <Button color="gray" size="1">
                  자세히 보기
                </Button>
              </Link>
            </Flex>
            <Flex align="center" gap="2">
              <Text size="2" weight="medium">
                - 친구 수 2300명, DAU 300명 츠누봇의 성장 스토리
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
            <Flex direction="column" pt="1">
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

              <Flex direction="column" pl="3">
                <Link target="_blank" href="https://ouchc.notion.site/b93fd109a7f444c3b194d869d51c8ccc?pvs=4">
                  <Text size="2" weight="medium" color="gray">
                    - 웨딩, 바디프로필을 찍는 사람이 커뮤니티에서 얻는 왜곡된 인지 현상을 분석하기 위한 비정형 데이터
                    수집 및 분석
                  </Text>
                </Link>
              </Flex>
            </Flex>

            <Flex direction="column" pt="1">
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

              <Flex direction="column" pl="3">
                <Link target="_blank" href="https://ouchc.notion.site/UX-abb483fedc3346fbae82a79b844cd4e9?pvs=4">
                  <Text size="2" weight="medium" color="gray">
                    - 개인정보 관련 문서 관리 서비스 Plip의 새로운 유료화 지점 도출을 위한 정성적 데이터 수집
                  </Text>
                </Link>
              </Flex>
            </Flex>

            <Flex direction="column" pt="1">
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

              <Flex direction="column" pl="3">
                <Link target="_blank" href="http://tovdata.com/doc/PrivacyDAM%20Manager%20guide.pdf">
                  <Text size="2" weight="medium" color="gray">
                    - PrivacyDam 서비스를 위한 프론트엔드 단독 작업
                  </Text>
                </Link>

                <Text size="2" weight="medium" color="gray">
                  - 기존 프론트엔드의 Atomic 구조에서 DX 개선을 위해 DDD를 도입
                </Text>
              </Flex>
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

        <Section px="8" pt="8" pb="0">
          <Heading size="3">EDUCATION</Heading>

          <Flex direction="column" pt="2" pl="4" gap="3">
            <Flex align="center" gap="2">
              <Text size="2" weight="medium">
                - 충남대학교
              </Text>
              <Separator orientation="vertical" color="gray" />
              <Text size="2" weight="medium">
                지역환경토목학과(주) / 컴퓨터융합학과(부)
              </Text>
              <Separator orientation="vertical" color="gray" />
              <Text size="2" weight="medium">
                2017.3 - 2024.3 (예정)
              </Text>
            </Flex>
          </Flex>
        </Section>
      </Container>
    </main>
  );
}
