import streamlit as st 

st.title("My Tuition Net Calculator using Python")

# Base tuition and fees
base_tuition = 42540
fees = 2025
total_cost = base_tuition + fees

# User inputs for GPA, SAI, and whether your from here
gpa = float(st.text_input("Enter your GPA (e.g., 3.5):", value=""))
sai = float(st.text_input("Enter your FAFSA SAI:", value=""))
local = st.checkbox("Are you local to the area?")

# Initialize AID
merit_scholarship = 0
pell_grant = 0
local_scholarship = 0

# Calculation of Merit and Pell Grants. 

if gpa >= 3.5:
    merit_scholarship = 20000
    st.balloons()

if sai <= 7395:
    pell_grant = 7395 - sai

if local: 
    local_scholarship = 5000

# Net Tuition Calculation Formula
net_tuition = total_cost - (merit_scholarship + pell_grant + local_scholarship)

st.subheader("Results")
st.write(f"Base Tuition + Fees: ${total_cost:,.2f}")
st.write(f"Merit Scholarship: ${merit_scholarship:,.2f}")
st.write(f"Pell Grant: ${pell_grant:,.2f}")
st.write(f"Local Scholarship: ${local_scholarship:,.2f}")

st.success(f"Your estimated net tuition is: ${net_tuition:,.2f}")