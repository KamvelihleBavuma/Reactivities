import { Grid } from "@mui/material";
import ActivityList from "./ActivityList";
import ActivityDetail from "../details/ActivityDetail";
import ActivityForm from "../form/ActivityForm";

type Props = {
  activities: Activity[];
  selectedActivity?: Activity;
  selectActivity: (id: string) => void;
  cancelSelectedActivity: () => void;
  openForm: (id: string) => void;
  closeForm: () => void;
  createOrEditMode: boolean;
};

export default function ActivitiesDashboard({
  activities,
  selectedActivity,
  selectActivity,
  cancelSelectedActivity,
  openForm,
  closeForm,
  createOrEditMode,
}: Props) {
  return (
    <Grid container spacing={3}>
      <Grid size={7}>
        <ActivityList
          activities={activities}
          selectActivity={selectActivity}
        />
      </Grid>
      <Grid size={5}>
        {selectedActivity && !createOrEditMode && (
          <ActivityDetail
            selectedActivity={selectedActivity}
            cancelSelectedActivity={cancelSelectedActivity}
            openForm={openForm}
          />
        )}
        {createOrEditMode && (
          <ActivityForm closeForm={closeForm} activity={selectedActivity} />
        )}
      </Grid>
    </Grid>
  );
}
