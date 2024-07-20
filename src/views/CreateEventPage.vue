<template>
  <div class="container color-white mt-5">
    <h2 class="mb-3">Create New Event</h2>
    <form @submit.prevent="createEvent" class="needs-validation" novalidate>
      <div class="mb-3">
        <label for="date" class="form-label">Date:</label>
        <input type="datetime-local" v-model="event.date" class="form-control" id="date" required>
      </div>
      <div class="mb-3">
        <label for="description" class="form-label">Description:</label>
        <input type="text" v-model="event.description" class="form-control" id="description" required>
      </div>
      <div class="mb-3">
        <label for="priority" class="form-label">Priority:</label>
        <input type="text" v-model="event.priority" class="form-control" id="priority" required>
      </div>
      <div class="mb-3">
        <label for="satelliteName" class="form-label">Satellite Name:</label>
        <input type="text" v-model="event.satelliteName" class="form-control" id="satelliteName" required>
      </div>
      <button type="submit" class="btn btn-warning">Create Event</button>
    </form>
  </div>
</template>

<script>
import EventService from '@/services/EventService';

export default {
  data() {
    return {
      event: {
        date: '',
        description: '',
        priority: '',
        satelliteName: ''
      }
    };
  },
  methods: {
    createEvent() {
      EventService.createEvent(this.event)
          .then(() => {
            this.$router.push('/');
          })
          .catch(error => {
            console.error("There was an error creating the event:", error);
          });
    }
  }
};
</script>

<style>
.color-white {
  color: white;
}

.btn-modern {
  background: #6fc168;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;
}

.btn-modern:hover {
  background: #9263ab;
  color: white;
  transform: translateY(-2px);
}

.btn-modern:active {
  transform: translateY(1px);
}
</style>
