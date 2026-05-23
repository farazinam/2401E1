v1<-c(2,4,6,8);
v2<-c(1,3,5,7);
print(v1+v2);
print(v1-v2);
print(v1*v2);
print(v1/v2);


x<-c(2.5, TRUE, 3+7i)
y<-c("abc", TRUE, 1-8i)
print(x&y)

age<-19;
if(is.integer(age)){
  print("Yes");
}else{
  print("No");
}

find<-c("education", "is", "the", "key", "to", "unlock", "the", "golden", "door", "of", "freedom");

if("unlock" %in% find){
  print("Available");
}else{
  print("NOT Available");
}

#Switch
x<-switch(2,"Hello", "R", "Programming");
print(x);

a<-"20";
x<-switch(a,
  "5"="Ali",
  "10"="Ahsan", 
  "15"="Ahmed", 
  "20"="Ammar")
print(x);

#next
n<-1:10;
for(res in n){
  if(res == 6){
    next;
  }
  print(n);
}

#break
z<-1;
repeat{
print("Hello R Programming!")
if(z>5){
break;
}
  z <- z + 1;
}

#for
loop<-1:10;
for(data in loop){
  print(paste(data, "Hell0 "));
}

for(data in 20:26){
  print(data);
}

veg<-c("Carrot", "Cucumber", "Eggplant", "Onion");
for(sabzi in veg){
  print(sabzi);
}

#break
x<-c("Welcome", "to", "R", "programming");
y<-1;
repeat{
  print(x);
  y<-y+1;
  if(y>3){
    break;
  }
}



# Function

# Custom/User-defined function


new.myFn1<- function(){
  print("Hello R Function");
}

new.myFn1();


new.myFn2<- function(){
  for(data in 1:5){
    print(data^2);
  }
}

new.myFn2();


new.paraFn1<-function(n){
  print(n)
}

new.paraFn1("Faraz");

new.paraFn2<-function(a,b){
  res<-a+b
  print(res)
}

new.paraFn2(3,8);

new.paraFn2<-function(a=7,b=9){
  res<-a+b
  print(res)
}

new.paraFn2();
new.paraFn2(4);
new.paraFn2(3,5);


# Built-in/Pre-defined Function

print(ceiling(2.2));
print(floor(2.9));
print(sin(0));
print(cos(0));
print(tan(0));
print(sqrt(81));
print(abs(-81));
print(log(81));

t<-c(2.6, 7.9, 5.4);
print(trunc(t));

n<-"Aptech Learning";
print(toupper(n));
print(tolower(n));


values<-c(1:7,9,3);
minval<- min(values)
print(minval);

maxval<- max(values)
print(maxval);

ins<-c("aptech", "learning", "north");
patt<-"^north";
print(grep(patt, ins));



# Data Structure

# Vector
# Atomic Vector

vec1<-c(2, 4, 6, 8);
vec2<-c(1:10);
vec3<-seq(11,20);
vec4<-seq(3,10, by=1.5)
vec5<-seq(1,10, length.out=15);

print(vec1);
print(vec2);
print(vec3);
print(vec4);
print(vec5);

print(vec1[1]);

vec6<-c("Ali"=22, "Ahmed"=31, "Farhan"=19);
print(vec6["Farhan"]);

vec7<-c("Ali", "Ahmed", "Farhan");
print(vec7[2]);

print(vec7[-2]);

#  ---------------------------

# List

l1<-list(1, "ABC", TRUE, 2.5);
l1;

odd<-c(1, 3, 5, 7, 9);
name<-c("Faraz", "Farhan", "Ahmed");
eligibility<-c(TRUE, FALSE);

listData<-list(odd, name, eligibility);
listData;

listData[[2]];
listData[[2]][1];

names(listData)<-c("odd_numbers", "student_name", "isAllowed");

listData[[2]];
listData[["student_name"]];
listData[["odd_numbers"]];
listData[["isAllowed"]];
listData$isAllowed;

list1 <- list(1,3,5,7);
list2 <- list(2,4,6,8);
print(list1 + list2);
class(list1);

# unlist

unl1<-unlist(list1);
unl2<-unlist(list2);
print(unl1 + unl2)
class(unl1);

list01<-list(1,2,3);
list02<-list(4,5,6);

mergedList<-merge(list01 , list02);
print(mergedList);

rep(c(2, 4, 6), time = 3)
rep(c(2, 4, 6), each = 3)
rep(c(2, 4, 6), time=c(2,10, 3))
rep(c(1:3), length.out = 10)


# Matrix

mat1 <- matrix(c(1:10), nrow = 2, byrow = TRUE);
mat2 <- matrix(c(1:12), ncol = 4, byrow = TRUE);

mat1;
mat2;

mat3<-matrix(c(5:16), nrow=2, ncol=2, byrow= TRUE)
print(mat3)

no_of_rows<-c("r1", "r2");
no_of_columns<-c("c1", "c2", "c3", "c4", "c5");

mat4 <- matrix(c(21:30), nrow = 2, byrow = TRUE, dimnames = list(no_of_rows, no_of_columns));
mat4;



# ---- Array

av1<-c(1,4,7,10);
av2<-c(2,5,8,11);

array1<-array(c(av1, av2), dim = c(2,3,2));
array1;

cols<-c("col1", "col2", "col3");
rows<-c("row1", "row2");
mat<-c("Matrix1", "Matrix2");

array1<-array(c(av1, av2), dim = c(2,3,2), dimnames = list(rows, cols, mat));
array1;

print(array1[2,2,2]); #4
print(array1[,2,2]);  #1, 4
print(array1[2,,2]);  #11, 4, 10
print(array1[2,2,]);  #10, 4

av11<-c(3,4,5,6);
av22<-c(2,3,2,3);

array2<-array(c(av11, av22), dim = c(2,3,2));
array2

manipulateArray<-array1 + array2;
manipulateArray;


# Factor

dir<-c("north", "west", "east", "south");
is.factor(dir)

res<-dir;
print(res)

res[3];

res[c(2,4)]
res[c(1,2)]
res[c(2,3)]
res[c(3,3)]

res[c(2)]
res[c(-2)]

res[1]<-"east";
res

dir<-factor(dir)
is.factor(dir)

dir2<-c("north", "west", "east", "north");
dir2<-factor(dir2)
dir2

factor(dir, levels = c("north", "west", "east", "south"), labels = c("N", "W", "E", "S"));

fac<-gl(3, 2, labels = c("Ahmed", "Arsalan", "Arham"));
fac


# Import CSV file in R

getwd();
setwd("C:\\Users\\farazinam\\Documents");
getwd();


myfile<-read.csv("products_dataset.csv");

View(myfile)
print(is.data.frame(myfile));
print(ncol(myfile))
print(nrow(myfile))
str(myfile)
summary(myfile)
names(myfile)
length(myfile)

myfile[c(7:13),]
myfile[c(7:13), c(2:4)]

#grep
grep("TotalSale", colnames(myfile))

salary<-myfile$Salary
View(salary)

myfile$prod<- myfile$Price + myfile$TotalSale;
View(myfile$prod)
View(myfile)

maxP<- max(myfile$Price)
maxP

minP<- min(myfile$Price)
minP

khiRec<-subset(myfile, location="Karachi")
print(khiRec)
View(khiRec)

k<-subset(myfile, Price > 99000)
k
View(k)

install.packages("xlsx");


# Data importing of MySQL database

install.packages("RMySQL")
library("RMySQL")

setwd("C:\\Users\\farazinam\\AppData\\Local\\Temp\\RtmpKwdTbO\\downloaded_packages");

con<-dbConnect(MySQL(),
          username = "root",
          password = "",
          host = "localhost",
          post = 3306,
          dbname = "clothes"
          );

con<-dbConnect(MySQL(),
               username = "root",
               dbname = "clothes"
);

dbListTables(con);
dbListFields(con, "product");

selectTable <- dbGetQuery(con, "select * from product");
View(selectTable);

sel<-"select * from product";
selectTable <- dbGetQuery(con, sel);
View(selectTable);



# ---- Data Visualization -----------

#Pie Chart

x<-c(15, 62, 21, 77);
label<-c("KPK", "Punjab", "Sindh", "Balochistan");
pie(x, label);

pie(x, label, main = "Provinces of Pakistan");
pie(x, label, main = "Provinces of Pakistan", col = rainbow(length(x)));

color<-c("black","red", "green", "blue");

pie(x, label, main = "Provinces of Pakistan", col = color);

legend("topright", label, cex = 0.8, fill = color)

`# 3D Pie chart


# Bar Chart

h<-c(19, 32, 64, 81, 11);
barplot(h);

months<-c("Jan", "Feb", "March", "April", "May");
region<-c("West", "North", "South");

values<-matrix(c(21,32,33,14,95,46,67,78,39,11,22,23,94,15,16), nrow = 1, ncol = 5, byrow = TRUE)

barplot(values, names.arg = months, xlab = "Month", ylab = "Revenue", col = c("red", "green", "blue"))


#Scatter Plot

View(mtcars)
dim(mtcars)
names(mtcars)
specificRec<-mtcars[c(2:4),c("hp", "drat")]
specificRec<-mtcars
View(specificRec)

plot(x = specificRec$wt, y = specificRec$mpg, 
     xlab = "weight", ylab = "mileage",  
     xlim = c(2.5,5), ylim = c(15,30), 
     main= "weight v/s mileage" );













