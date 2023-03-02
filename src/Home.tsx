import { Card, Content, Heading, Paragraph } from "@sharegate/orbit-ui";

export interface HomeProps {
    title?: string;
}

export function Home({ title = "Welcome Home!" }: HomeProps) {
    return (
        <Card variant="outline">
            <Heading>{title}</Heading>
            <Content>
                <Paragraph>
                    Home is the place where you feel the most confortable.<br />
                    Home is the place where you hang with your loves one.<br />
                    Home is the place where you wear sweatpants all day!<br />
                </Paragraph>
            </Content>
        </Card>
    );
}
