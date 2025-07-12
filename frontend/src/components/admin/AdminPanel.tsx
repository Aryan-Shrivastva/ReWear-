import React, { useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  Tabs,
  Tab,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Chip,
  IconButton,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`admin-tabpanel-${index}`}
      aria-labelledby={`admin-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const AdminPanel = () => {
  const [tabValue, setTabValue] = useState(0);

  // Mock data - replace with API data
  const pendingItems = [
    {
      id: 1,
      title: 'Denim Jacket',
      user: 'john@example.com',
      category: 'Outerwear',
      condition: 'Like New',
      submittedAt: '2024-03-20',
    },
    {
      id: 2,
      title: 'Summer Dress',
      user: 'jane@example.com',
      category: 'Dresses',
      condition: 'Good',
      submittedAt: '2024-03-19',
    },
  ];

  const users = [
    {
      id: 1,
      email: 'john@example.com',
      name: 'John Doe',
      itemsListed: 5,
      swapsCompleted: 3,
      joinedAt: '2024-02-15',
      status: 'active',
    },
    {
      id: 2,
      email: 'jane@example.com',
      name: 'Jane Smith',
      itemsListed: 8,
      swapsCompleted: 6,
      joinedAt: '2024-02-10',
      status: 'active',
    },
  ];

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleApproveItem = (itemId: number) => {
    // TODO: Implement item approval logic
    console.log('Approve item:', itemId);
  };

  const handleRejectItem = (itemId: number) => {
    // TODO: Implement item rejection logic
    console.log('Reject item:', itemId);
  };

  const handleDeleteUser = (userId: number) => {
    // TODO: Implement user deletion logic
    console.log('Delete user:', userId);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Admin Panel
      </Typography>

      <Paper sx={{ width: '100%', mb: 2 }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          aria-label="admin panel tabs"
        >
          <Tab label="Pending Items" />
          <Tab label="User Management" />
        </Tabs>

        <TabPanel value={tabValue} index={0}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell>User</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>Condition</TableCell>
                  <TableCell>Submitted</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {pendingItems.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.title}</TableCell>
                    <TableCell>{item.user}</TableCell>
                    <TableCell>{item.category}</TableCell>
                    <TableCell>{item.condition}</TableCell>
                    <TableCell>{item.submittedAt}</TableCell>
                    <TableCell>
                      <IconButton
                        color="success"
                        onClick={() => handleApproveItem(item.id)}
                      >
                        <CheckIcon />
                      </IconButton>
                      <IconButton
                        color="error"
                        onClick={() => handleRejectItem(item.id)}
                      >
                        <CloseIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Items Listed</TableCell>
                  <TableCell>Swaps</TableCell>
                  <TableCell>Joined</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.itemsListed}</TableCell>
                    <TableCell>{user.swapsCompleted}</TableCell>
                    <TableCell>{user.joinedAt}</TableCell>
                    <TableCell>
                      <Chip
                        label={user.status}
                        color={user.status === 'active' ? 'success' : 'error'}
                        size="small"
                      />
                    </TableCell>
                    <TableCell>
                      <IconButton
                        color="error"
                        onClick={() => handleDeleteUser(user.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>
      </Paper>
    </Container>
  );
};

export default AdminPanel; 