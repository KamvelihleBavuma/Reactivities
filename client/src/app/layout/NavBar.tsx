import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
} from "@mui/material";

import { Group } from "@mui/icons-material";
import { NavLink } from "react-router";
import MenuItemLink from "../shared/components/MenuItemLink";

export default function NavBar() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundImage:
          "linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Button component={NavLink} to="/" color="inherit" sx={{ display: "flex", gap: 2}}>
              <Group fontSize="large" />

              <Typography
                variant="h4"
                sx={{ fontWeight: "bold" }}
              >
                Reactivities
              </Typography>
            </Button>
          </Box>

          {/* Navigation Links */}
          <Box sx={{ display: "flex" }}>
            <MenuItemLink to="/activities">Activities</MenuItemLink>

            <MenuItemLink to="/createActivity">Create Activity</MenuItemLink>
          </Box>

          <Button>User menu</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
