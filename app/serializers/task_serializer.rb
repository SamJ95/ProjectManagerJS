class TaskSerializer
  include FastJsonapi::ObjectSerializer
  
  attributes :content, :project_id
end
