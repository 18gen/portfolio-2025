import { Table } from "@chakra-ui/react";
import { bio } from "@/data/bio";

export default function Bio() {
  return (
    <Table.Root size="sm" striped>
      <Table.Body>
        {bio.map((entry) => (
          <Table.Row key={entry.year}>
            <Table.Cell fontWeight={"bold"}>{entry.year}</Table.Cell>
            <Table.Cell>{entry.event}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
}
