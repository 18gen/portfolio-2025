import { Table } from "@chakra-ui/react";

export default function Bio() {
  return (
    <Table.Root size="sm" striped>
      <Table.Body>
        <Table.Row>
          <Table.Cell fontWeight={"bold"}>2003</Table.Cell>
          <Table.Cell>
            Born in Aichi(愛知) & Raised in Gifu(岐阜), Japan
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell fontWeight={"bold"}>2019</Table.Cell>
          <Table.Cell>
            Graduted from Honjo Juninor High School (Gifu, Japan)
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell fontWeight={"bold"}>2022</Table.Cell>
          <Table.Cell>
            Graduted from Sequam Secondary School (Delta, BC, Canada)
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell fontWeight={"bold"}>2026</Table.Cell>
          <Table.Cell>
            Expecting to graduate University of Waterloo (Waterloo, ON, Canada)
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell fontWeight={"bold"}>...after</Table.Cell>
          <Table.Cell>
            Applying to medical school, to become a doctor in Japan
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  );
}
