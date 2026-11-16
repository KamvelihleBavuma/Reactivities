import { CssBaseline, Container, Box } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import ActivitiesDashboard from "../../features/Activities/dashboard/ActivitiesDashboard";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<
    Activity | undefined
  >(undefined);
  const [createOrEditMode, setCreateOrEditMode] = useState(false);

  useEffect(() => {
    axios
      .get<Activity[]>("https://localhost:5001/api/activities")
      .then((response) => setActivities(response.data));

    return () => {};
  }, []);

  const handleSelectedActivity = (id: string) => {
    setSelectedActivity(activities.find((x) => x.id === id));
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

  const handleSubmitForm = (activity: Activity) => {
    if (activity.id) {
      setActivities(
        activities.map((x) => (x.id === activity.id ? activity : x)),
      );
      setSelectedActivity(activity);
    } else {
      const newActivity = { ...activity, id: activities.length.toString() };
      setSelectedActivity(newActivity);
      setActivities([...activities, newActivity]);
    }
    setCreateOrEditMode(false);
  };

  const handleDelete = (id: string) => {
    setActivities(activities.filter((x) => x.id !== id));
  };

  return (
    <>
      <Box sx={{ bgcolor: "#eeeeee" }}>
        <CssBaseline />
        <NavBar openForm={handleOpenForm} />
        <Container maxWidth="xl" sx={{ mt: 3 }}>
          <ActivitiesDashboard
            activities={activities}
            selectedActivity={selectedActivity}
            selectActivity={handleSelectedActivity}
            cancelSelectedActivity={handleCancelSelectedActivity}
            createOrEditMode={createOrEditMode}
            openForm={handleOpenForm}
            closeForm={handleCloseForm}
            submitForm={handleSubmitForm}
            deleteActivity={handleDelete}
          />
        </Container>
      </Box>
    </>
  );
}

export default App;
