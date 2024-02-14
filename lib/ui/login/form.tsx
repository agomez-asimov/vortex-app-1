import { USER } from "@/lib/constants";
import { Button, Form, Stack } from "react-bootstrap";

export default function LoginForm({}) {
  return (
    <Stack>
      <Form>
        <Form.Group>
          <Form.Label>{USER.name}</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group>
          <Form.Label>{USER.password}</Form.Label>
          <Form.Control type="password" />
        </Form.Group>
      </Form>
      <Stack direction="horizontal">
        <Button type="submit">{USER.login}</Button>
      </Stack>
    </Stack>
  );
}
