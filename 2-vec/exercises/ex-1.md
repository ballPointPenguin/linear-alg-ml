# Week 2: Exercise Set 1

1. What is the size of the vector

$$
s=
\begin{bmatrix}
1 \\
3 \\
4 \\
2
\end{bmatrix}
=\sqrt{1^{2}+3^{2}+4^{2}+2^{2}}
=\sqrt{1+9+16+4}
=\sqrt{30} \\
\lvert s \rvert = \sqrt{30}
$$

2. What is the dot product of the vectors

$$
\mathbf{r} =
\begin{bmatrix}
-5 \\
3 \\
2 \\
8
\end{bmatrix}
\mathbf{s} =
\begin{bmatrix}
1 \\
2 \\
-1 \\
0
\end{bmatrix}
\newline
\quad
\newline
\mathbf{r} \cdot \mathbf{s} = (-5 \cdot1)+(3\cdot2)+(2\cdot-1)+(8\cdot0)
\newline\quad\newline
\mathbf{r}\cdot\mathbf{s}=-5+6+-2+0
\newline\quad\newline
\mathbf{r}\cdot\mathbf{s}=-1
$$

3. What is the scalar projection of s onto r?

$$
\text{proj}_{\vec{a}}\vec{b} = \frac{\vec{a} \cdot \vec{b}}{\Vert{\vec{a}}\Vert}
\qquad
\mathbf{r}=
\begin{bmatrix}
3\\
-4\\
0
\end{bmatrix}
\quad
\mathbf{s}=
\begin{bmatrix}
10\\
5\\
-6
\end{bmatrix}
$$
first, find the size of vector r
$$
\Vert{\vec{r}}\Vert=\sqrt{3^2+-4^2+0^2}\\
\quad\\
\Vert{\vec{r}}\Vert=\sqrt{9+16}\\
\quad\\
\Vert{\vec{r}}\Vert=5
$$
now, find the dot product of r and s
$$
\mathbf{r}\cdot\mathbf{s}=(3\cdot10)+(-4\cdot5)+(0\cdot-6)\\
\quad\\
\mathbf{r \cdot s} = (30)+(-20) = 10
$$
finally,
$$
\text{proj}_{\vec{r}}\vec{s} = \frac{10}{5} = 2
$$

4. What is the vector projection of s onto r?

$$
\mathbf{r}=
\begin{bmatrix}
3\\
-4\\
0
\end{bmatrix}
\quad
\mathbf{s}=
\begin{bmatrix}
10\\
5\\
-6
\end{bmatrix}
\qquad
\text{proj}_{\vec{a}}\vec{b} = \frac{\vec{a} \cdot \vec{b}}{\vec{a} \cdot \vec{a}} \vec{a}
$$
Find the dot products
$$
\mathbf{r \cdot s} = (3 \cdot 10) + (-4 \cdot 5) + (0 \cdot -6)\\
\quad\\
\mathbf{r \cdot s} = (30) + (-20)\\
\quad\\
\mathbf{r \cdot s} = 10\\
\quad\\
\mathbf{r \cdot r} = (3 \cdot 3) + (-4 \cdot -4) + (0 \cdot 0)\\
\quad\\
\mathbf{r \cdot r} = (9) + (16) = 25
$$
Find the projection
$$
\text{proj}_{\vec{r}}\vec{s} =
\frac{10}{25}\vec{r} =
\frac{2}{5}\vec{r} =
\frac{2}{5} \cdot
\begin{bmatrix}
3\\
-4\\
0
\end{bmatrix} =
\begin{bmatrix}
\frac{6}{5}\\\quad\\
\frac{-8}{5}\\\quad\\
0
\end{bmatrix}
$$

5. Which is larger, |a + b|, or |a| + |b| ?

$$
\text{let a} =
\begin{bmatrix}
3\\
0\\
4
\end{bmatrix}\qquad
\text{let b} =
\begin{bmatrix}
0\\
5\\
12
\end{bmatrix}
$$

$$
a + b =
\begin{bmatrix}
3\\
5\\
16
\end{bmatrix}
\qquad
|a + b| =
\sqrt{3^2 + 5^2 + 16^2} =
\sqrt{9 + 25 + 256} =
\sqrt{290}\\
\quad\\
\quad\\
|a| + |b| =
\sqrt{3^2 + 4^2} + \sqrt{5^2 + 12^2} =
\sqrt{25} + \sqrt{169} =
5 + 13 = 18 \text{ or }\sqrt{324}\\
\quad\\
\quad\\
\text{thus, } \Vert{a}\Vert+\Vert{b}\Vert>\Vert{a + b}\Vert
$$

6. Which of the following statements about dot products are correct?

A. The scalar projection of $\mathbf{s}$ onto $\mathbf{r}$ is always the same as the scalar projection of $\mathbf{r}$ onto $\mathbf{s}$.
(not true)

B. We can find the angle between two vectors using the dot product.
$$
\vec{a} \cdot \vec{b} = \Vert{\vec{a}}\Vert\Vert{\vec{b}}\Vert\cos\theta\\
\quad\\
\theta = \arccos\left(\frac{\vec{a} \cdot \vec{b}}{\Vert{\vec{a}}\Vert\Vert{\vec{b}}\Vert}\right)
$$
(true)

C. The order of vectors in the dot product is important, so that $\mathbf{s \cdot r} \neq \mathbf{r \cdot s}$.
(not true)

D. The size of a vector is equal to the square root of the dot product of the vector with itself.
$$
\Vert{\vec{v}}\Vert =
\sqrt{\sum_{i=1}^{n} v_i^2}
\quad=?\quad
\sqrt{\vec{v} \cdot \vec{v}}
$$
(true)

E. The vector projection of s onto r is equal to the scalar projection of s onto r multiplied by a vector of unit length that points in the same direction as r.
$$
\text{recall}\quad
\hat{r} = \frac{\vec{r}}{\Vert{\vec{r}}\Vert}\quad
\text{and}\quad
\Vert{\vec{r}}\Vert^2 = \vec{r}\cdot\vec{r}
$$
$$
\text{proj}_{\vec{r}}\vec{s} =
\frac{\vec{r} \cdot \vec{s}}{\vec{r} \cdot \vec{r}} \vec{r}
\quad =? \quad
\frac{\vec{r} \cdot \vec{s}}{\Vert{\vec{r}}\Vert}
\hat{r}
$$
$$
\frac{\vec{r}\cdot\vec{s}}{\Vert{\vec{r}}\Vert}\cdot
\frac{\vec{r}}{\Vert{\vec{r}}\Vert}
\quad=\quad
\frac{(\vec{r}\cdot\vec{s})}
{\Vert{\vec{r}}\Vert^2}\vec{r}
\quad=\quad
\frac{\vec{r}\cdot\vec{s}}
{\vec{r}\cdot\vec{r}}\vec{r}
$$
(true)
