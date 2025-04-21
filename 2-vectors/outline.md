# Week 2

In this module, we look at operations we can do with vectors - finding the modulus (size), angle between vectors (dot or inner product) and projections of one vector onto another. We can then examine how the entries describing a vector will depend on what vectors we use to define the axes - the basis. That will then let us determine whether a proposed set of basis vectors are what's called 'linearly independent.' This will complete our examination of vectors, allowing us to move on to matrices in module 3 and then start to solve linear algebra problems.

## Learning Objectives

- Calculate basic operations (dot product, modulus, negation) on vectors
- Calculate a change of basis
- Recall linear independence
- Identify a linearly independent basis and relate this to the dimensionality of the space

## Module 1: Finding the size of a vector, its angle, and projection

### Lecture 1a: Modulus & inner product

In the current lecture, the focus is on vector operations, specifically length and the dot product. Here are the key points:

Vector Definition: A vector has two main properties: length and direction.

Length Calculation: For a vector defined by two orthogonal unit vectors (i and j), the length can be calculated using the Pythagorean theorem:
$\text{Length} = \sqrt{a^2 + b^2}$

Dot Product: The dot product of two vectors ( r ) and ( s ) is calculated by multiplying their corresponding components and summing the results. It is a scalar value.

Properties of Dot Product:

- Commutative: $r \cdot s = s \cdot r$
- Distributive: $r \cdot (s + t) = r \cdot s + r \cdot t$
- Associative: $a \cdot (r \cdot s) = (a \cdot r) \cdot s$ for a scalar a
- Link to Length: The dot product of a vector with itself gives the square of its length.

This lecture emphasizes the foundational concepts of vectors in linear algebra, which are crucial for understanding more complex applications in machine learning.

### Lecture 1b: Cosine & dot product

In the current lecture, the focus is on the cosine rule and its application in vector notation. Here are the key points:

The cosine rule states that for a triangle with sides (a), (b), and (c), the relationship is given by $c^2 = a^2 + b^2 - 2ab \cdot \cos(\theta)$,
where $\theta$ is the angle between sides (a) and (b).

This can be translated into vector notation using vectors (r) and (s), leading to the expression for the modulus of the difference of the vectors:
$|r - s|^2 = |r|^2 + |s|^2 - 2|r||s| \cdot \cos(\theta)$
The dot product is introduced, where
$(r - s) \cdot (r - s) = r \cdot r - 2(r \cdot s) + s \cdot s$.
By comparing both sides, it is derived that the dot product
$r \cdot s = |r||s| \cdot \cos(\theta)$

The implications of the dot product are discussed:

- If the vectors are orthogonal (90 degrees apart), the dot product is 0.
- If they point in the same direction, the dot product is positive.
- If they point in opposite directions, the dot product is negative.

This lecture emphasizes the geometric interpretation of the dot product in relation to the angle between vectors.

### Lecture 1c: Projection

In the current lecture segment, the concept of projection in vector mathematics is discussed. Here are the key points:

Projection involves dropping a right triangle to visualize the relationship between two vectors, R and S.

The angle θ is used to relate the cosine function to the lengths of the sides of the triangle, specifically the adjacent side (the projection of S onto R) and the hypotenuse (the length of S).

The dot product of vectors R and S is defined as the product of their magnitudes and the cosine of the angle between them:
$R \cdot S = |R| \cdot |S| \cdot \cos(\theta)$
The projection of S onto R can be calculated, and if S is perpendicular to R, the projection is zero.

Two types of projections are defined:

- Scalar projection: The length of the projection of S onto R.
- Vector projection: The scalar projection multiplied by a unit vector in the direction of R.

This segment emphasizes the mathematical operations related to the dot product and how it can be used to find projections of vectors.

## Module 2: Changing the reference frame

### Lecture 2a: Changing basis

In the current lecture, the focus is on coordinate systems in vector spaces. Key points include:

- Vectors are defined as objects that move from the origin to a point in space, which can represent physical locations or data dimensions.
- The coordinate system can be defined using basis vectors (e.g., e1 and e2) of unit length, which can be arbitrary and not necessarily orthogonal.
- The representation of a vector (r) can change depending on the chosen basis vectors, but the vector itself exists independently of these representations.
- When basis vectors are orthogonal, the dot product can be used to project vectors onto these basis vectors, simplifying calculations.
- The lecture demonstrates how to convert a vector's representation from one basis to another using projections and dot products.

### Lecture 2b: Basis, vector space, and linear independence

In the current lecture, the concept of a basis in vector spaces is defined. Here are the key points:

A basis consists of a set of n vectors that are linearly independent, meaning no vector can be expressed as a combination of the others.

The span of these vectors describes an n-dimensional space.
For example:

- A single vector can describe a 1D line.
- Two linearly independent vectors can describe a 2D plane.
- A third vector that is not a combination of the first two can extend this to a 3D space.

Basis vectors do not need to be unit vectors or orthogonal, but using orthonormal basis vectors (90 degrees and unit length) simplifies calculations.

When changing from one basis to another, the vector space remains evenly spaced, and linear operations like addition and scalar multiplication still apply.

This foundational understanding of basis and linear independence is crucial for further studies in linear algebra and its applications in machine learning.

### Lecture 2c: Applications of changing basis

In the current lecture, the focus is on dimensionality in data representation. Key points include:

- 2D Data Points: The lecture discusses how data points can be represented along a line, measuring their distance from that line.
- Noise Measurement: The distance from the line indicates the "noise" in the data; smaller distances suggest a better fit, while larger distances indicate more spread.
- Orthogonal Directions: The concepts of mapping data along the line and away from it are introduced, emphasizing the use of the dot product for projections.
- Neural Networks: The lecture connects these ideas to machine learning, explaining how neural networks can transform pixel data into meaningful features (like nose shape or skin hue) for tasks such as face recognition.
- Basis Vectors: The importance of independent basis vectors in vector spaces is highlighted, along with their role in mapping data effectively.

## Module 3: Doing some real-world vectors examples
