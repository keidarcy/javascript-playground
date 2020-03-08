// Trade off between query performance vs consistency

// Using References (Normalization) -> CONSISTENCY
let author = {
  name: 'Jonn'
};

let course = {
  author: 'id'
};

// Using Embedded Documents (Denormalization) -> PERFORMANCE
let course = {
  author: {
    name: 'Dow'
  }
};

// Hybrid
let author = {
  name: 'Mosh'
  // 50 other properties
};

let course = {
  author: {
    id: 'ref',
    name: 'John'
  }
};
