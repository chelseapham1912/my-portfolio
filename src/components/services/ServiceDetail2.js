import React from 'react';
import "../../App.css";
import Image5 from "../../assets/img6.png";
import { useNavigate } from "react-router-dom"; // Import useNavigate từ react-router-dom
import { RiArrowGoBackLine } from 'react-icons/ri'; // Import icon mũi tên

const ServiceDetail2 = () => {
  const navigate = useNavigate(); // Khởi tạo hook để điều hướng

  const handleBack = () => {
    navigate("/#services"); // Điều hướng về dịch vụ
  };

  return (
    <div style={{ position: 'relative' }}>
      <img 
        src={Image5} 
        alt="Service Detail" 
        style={{ 
          maxWidth: '100%',  
          height: 'auto',     
        }} 
      />
      <button 
        onClick={handleBack} 
        style={{
          position: 'absolute',
          top: '20px', // Điều chỉnh vị trí của nút
          left: '20px', // Điều chỉnh vị trí của nút
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Nền mờ đen
          border: 'none',
          borderRadius: '5px', // Bo góc cho nút
          cursor: 'pointer',
          padding: '10px', // Thêm khoảng cách xung quanh icon
          zIndex: 10, // Đảm bảo nút nằm trên ảnh
          transition: 'background-color 0.3s ease, transform 0.3s ease', // Hiệu ứng khi hover
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.7)'; // Nền trắng khi hover
          e.currentTarget.style.transform = 'scale(1.1)'; // Tăng kích thước khi hover
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Quay lại nền mờ đen khi không hover
          e.currentTarget.style.transform = 'scale(1)'; // Quay lại kích thước ban đầu khi không hover
        }}
      >
        <RiArrowGoBackLine size={30} color="white" /> {/* Thay icon mũi tên */}
      </button>
    </div>
  );
}

export default ServiceDetail2;
