class ProjectSerializer
  include FastJsonapi::ObjectSerializer

  has_many :tasks
  attributes :name, :description
  

  
end
