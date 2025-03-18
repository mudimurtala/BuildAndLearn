# ChatGPT Prompts

1 - I have a directory named sales with multiple Excel files. Each file has two columns. The first is the name of a product and has the header Product, and the second is the number of that product sold and has the header Sold. Write a function that reads in that data for further analysis. The data from each file needs to be separate.

2 - Design test cases and a program to unit test the read_sales_data function.

3 - Write a function that compares the number of products sold for products that appear in multiple files. Using the data returned by read_sales_data, it should:
1. Find the average sales for that product across the files it's in.
2. Find any files where the sales are more than 10% different than the average.
3. Return the product, the average, and the files where the sales vary by 10%.

