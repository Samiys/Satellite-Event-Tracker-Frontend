<template>
  <div class="container color-white mt-5">
    <h2 class="mb-3">Create New Event</h2>
    <form @submit.prevent="createEvent" class="needs-validation" novalidate>
      <div class="mb-3">
        <label for="date" class="form-label">Date:</label>
        <input
            type="datetime-local"
            v-model="event.date"
            class="form-control"
            id="date"
            required
            @blur="validateField('date')"
        />
        <div v-if="errors.date" class="text-danger">{{ errors.date }}</div>
      </div>
      <div class="mb-3">
        <label for="description" class="form-label">Description:</label>
        <input
            type="text"
            v-model="event.description"
            class="form-control"
            id="description"
            required
            @blur="validateField('description')"
        />
        <div v-if="errors.description" class="text-danger">{{ errors.description }}</div>
      </div>
      <div class="mb-3">
        <label for="priority" class="form-label">Priority:</label>
        <select
            v-model="event.priority"
            class="form-control"
            id="priority"
            required
            @blur="validateField('priority')"
        >
          <option value="" disabled>Select priority</option>
          <option v-for="option in priorityOptions" :key="option" :value="option">
            {{ option }}
          </option>
        </select>
        <div v-if="errors.priority" class="text-danger">{{ errors.priority }}</div>
      </div>
      <div class="mb-3">
        <label for="satelliteName" class="form-label">Satellite Name:</label>
        <input
            type="text"
            v-model="event.satelliteName"
            class="form-control"
            id="satelliteName"
            required
            @blur="validateField('satelliteName')"
        />
        <div v-if="errors.satelliteName" class="text-danger">{{ errors.satelliteName }}</div>
      </div>
      <button type="submit" class="btn btn-modern" :disabled="!isFormValid">Create Event</button>
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
      },
      priorityOptions: ['High', 'Medium', 'Low'],
      errors: {}
    };
  },
  computed: {
    isFormValid() {
      return (
          !Object.keys(this.errors).length &&
          this.event.date &&
          this.event.description &&
          this.event.priority &&
          this.event.satelliteName
      );
    }
  },
  methods: {
    createEvent() {
      this.validateForm();
      if (this.isFormValid) {
        EventService.createEvent(this.event)
            .then(() => {
              this.$router.push('/');
            })
            .catch(error => {
              console.error("There was an error creating the event:", error);
            });
      }
    },
    validateField(field) {
      if (!this.event[field]) {
        this.$set(this.errors, field, `${field.charAt(0).toUpperCase() + field.slice(1)} is required.`);
      } else {
        this.$delete(this.errors, field);
      }
    },
    validateForm() {
      this.validateField('date');
      this.validateField('description');
      this.validateField('priority');
      this.validateField('satelliteName');
    }
  }
};
</script>
