import { CssBaseline, Container, Box, Typography } from "@mui/material";
import { useState } from "react";
import NavBar from "./NavBar";
import ActivitiesDashboard from "../../features/Activities/dashboard/ActivitiesDashboard";
import { useActivities } from "../../lib/hooks/useActivities";

function App() {
  const [selectedActivity, setSelectedActivity] = useState<
    Activity | undefined
  >(undefined);
  const [createOrEditMode, setCreateOrEditMode] = useState(false);
  const {activities, isPending} = useActivities();

  const handleSelectedActivity = (id: string) => {
    setSelectedActivity(activities!.find((x: { id: string }) => x.id === id));
  };

  const handleCancelSelectedActivity = () => {
    setSelectedActivity(undefined);
  };

  const handleOpenForm = (id?: string) => {
    if (id) handleSelectedActivity(id);
    else handleCancelSelectedActivity();
    setCreateOrEditMode(true);
  };

  const handleCloseForm = () => {
    setCreateOrEditMode(false);
  };

  return (
    <>
      <Box sx={{ bgcolor: "#eeeeee", minHeight: '100vh' }}>
        <CssBaseline />
        <NavBar openForm={handleOpenForm} />
        <Container maxWidth="xl" sx={{ mt: 3 }}>
          {!activities || isPending ? (
            <Typography>Loading...</Typography>
          ) : (
            <ActivitiesDashboard
              activities={activities}
              selectedActivity={selectedActivity}
              selectActivity={handleSelectedActivity}
              cancelSelectedActivity={handleCancelSelectedActivity}
              createOrEditMode={createOrEditMode}
              openForm={handleOpenForm}
              closeForm={handleCloseForm}
            />
          )}
        </Container>
      </Box>
    </>
  );
}

export default App;
