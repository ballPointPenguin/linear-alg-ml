# Week 2: Exercises #4

1.

A ship travels with velocity given by $\begin{bmatrix}1\\2\end{bmatrix}$,
with current flowing in the direction given by $\begin{bmatrix}1\\1\end{bmatrix}$
with respect to some co-ordinate axes.
What is the velocity of the ship in the direction of the current?

Let the ship be $\vec{a}$ and the current be $\vec{b}$,
The sclar projection of a onto b is

$$
\text{proj}_{\vec{b}}\vec{a}=\frac{\vec{a}\cdot\vec{b}}{\vec{b}\cdot\vec{b}}\vec{b}
$$

$$
\text{where }
\vec{a}\cdot\vec{b}=3,\quad\vec{b}\cdot\vec{b}=2\\\quad\\
\frac{3}{2}\cdot\begin{bmatrix}1\\1\end{bmatrix}=
\begin{bmatrix}3/2\\3/2\end{bmatrix}
$$

2.

A ball travels with velocity given by $\begin{bmatrix}2\\1\end{bmatrix}$,
with wind blowing in the direction given by $\begin{bmatrix}3\\-4\end{bmatrix}$
with respect to some co-ordinate axes.

What is the size of the velocity of the ball in the direction of the wind?
Let $\vec{b}$ be the ball's velocity, and $\vec{a}$ be the wind.

$$
\frac{\vec{a}\cdot\vec{b}}{\Vert{\vec{a}}\Vert}
=\frac{2}{\sqrt{3^2+-4^2}}
=\frac{2}{5}
$$

3.

Given vectors **v** = $\begin{bmatrix}-4\\-3\\8\end{bmatrix}$, **b1** = $\begin{bmatrix}1\\2\\3\end{bmatrix}$, **b2** = $\begin{bmatrix}-2\\1\\0\end{bmatrix}$, and **b3** = $\begin{bmatrix}-3\\-6\\5\end{bmatrix}$
all written in the standard basis.
Given that **b1**,**b2**, and **b3** are all pairwise orthogonal to each other.
What is **v** in the basis defined by **b1**, **b2**, and **b3**?

$$
\frac{\vec{v}\cdot\vec{b_1}}{\vec{b_1}\cdot\vec{b_1}}=
\frac{14}{14}=1\quad
\frac{\vec{v}\cdot\vec{b_2}}{\vec{b_2}\cdot\vec{b_2}}=
\frac{5}{5}=1\quad
\frac{\vec{v}\cdot\vec{b_3}}{\vec{b_3}\cdot\vec{b_3}}=
\frac{70}{70}=1\\
\quad\\
\vec{v_b}=\begin{bmatrix}1\\1\\1\end{bmatrix}
$$

4.

Are the following vectors linearly independent?

$$
\vec{a}=\begin{bmatrix}1\\2\\-1\end{bmatrix},
\vec{b}=\begin{bmatrix}3\\-4\\5\end{bmatrix},
\vec{c}=\begin{bmatrix}1\\-8\\7\end{bmatrix}
$$

$$
c_1\vec{a}+c_2\vec{b}+c_3\vec{c}=\vec{0}?\\
c_1\cdot1+c_2\cdot3+c_3\cdot1=0?\\
c_1\cdot2+c_2\cdot(-4)+c_3\cdot(-8)=0?\\
c_1\cdot(-1)+c_2\cdot5+c_3\cdot7=0?
$$

$$
\begin{bmatrix}1&3&1\\2&-4&-8\\-1&5&7\end{bmatrix}
\begin{bmatrix}c_1\\c_2\\c_3\end{bmatrix}=
\begin{bmatrix}0\\0\\0\end{bmatrix}
$$

doing matrix row operations;

$$
R_2:=R_2-2R_1\\
\begin{bmatrix}1&3&1\\0&-10&-10\\-1&5&7\end{bmatrix}\\\,\\
R_3:=R_3+R_1\\
\begin{bmatrix}1&3&1\\0&-10&-10\\0&8&8\end{bmatrix}\\\,\\
R_2:=R_2\div(-10)\\
\begin{bmatrix}1&3&1\\0&1&1\\0&8&8\end{bmatrix}\\\,\\
R_3:=R_3-8R_2
\begin{bmatrix}1&3&1\\0&1&1\\0&0&0\end{bmatrix}\\\,\\
$$

Since we have a row of all zeros, the system has infinitely many solutions,
which means the vectors are linearly dependent.

And in fact $\vec{c}=-2\vec{a}+\vec{b}$

[~~Yes~~ No!]

5.

At 12:00 pm, a spaceship is at position $\begin{bmatrix}3\\2\\4\end{bmatrix}$ _km_ away from the origin,
with respect to some 3 dimensional co-ordinate system.
The ship is travelling with velocity $\begin{bmatrix}-1\\2\\-3\end{bmatrix}$ _km/h_.
What is the location of the spaceship after 2 hours?

$$
\begin{bmatrix}3-2\\2+4\\4-6\end{bmatrix}=
\begin{bmatrix}1\\6\\-2\end{bmatrix}
$$
