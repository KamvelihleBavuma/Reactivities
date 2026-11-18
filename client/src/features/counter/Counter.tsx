import {
  Box,
  Button,
  ButtonGroup,
  List,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { useStore } from "../../lib/hooks/useStore";
import { observer } from "mobx-react-lite";

const Counter = observer(function Counter() {
  const { counterStore } = useStore();

  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ width: "60%" }}>
        <Typography variant="h4" gutterBottom>
          {counterStore.title}
        </Typography>
        <Typography variant="h6">
          The count is: {counterStore.counter}
        </Typography>
        <ButtonGroup sx={{ display: "flex", gap: 1, pt: 1 }}>
          <Button
            onClick={() => counterStore.decrement()}
            variant="contained"
            color="error"
          >
            Decrement
          </Button>
          <Button
            onClick={() => counterStore.increment()}
            variant="contained"
            color="success"
          >
            Increment
          </Button>
          <Button
            onClick={() => counterStore.increment(5)}
            variant="contained"
            color="primary"
          >
            Increment by 5
          </Button>
        </ButtonGroup>
      </Box>
      <Paper sx={{ width: "40%", p: 3 }}>
        <Typography variant="h5">
          Counter of events is at ({counterStore.eventCount})
        </Typography>
        <List>
          {counterStore.events.map((event, index) => (
            <ListItemText key={index}>{event}</ListItemText>
          ))}
        </List>
      </Paper>
    </Box>
  );
});

export default Counter;
